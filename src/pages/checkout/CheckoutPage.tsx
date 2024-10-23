import { useNavigate } from 'react-router';
import { AddressOrderInformation } from '../../components/checkout/address-info/AddressOrderInformation';
import { ContactInformation } from '../../components/checkout/contact-info/ContactInformation';
import { OrderSummary } from '../../components/checkout/order-summary/OrderSummary';
import { Button } from '../../components/utils/button/Button';
import s from './Checkoutpage.module.scss';
import { useCreateOrderFromCartMutation, useCreatePaymentMutation } from '../../redux/orders/ordersApi';
import { useEffect, useState } from 'react';
import { useGetUserProfileQuery } from '../../redux/user/userApi';
import { Order } from '../../libs/types/Order';

export const CheckoutPage = () => {
  const [createOrderFromCart] = useCreateOrderFromCartMutation();
  const [createPayment, { isLoading, error }] = useCreatePaymentMutation();
  const { data, isSuccess } = useGetUserProfileQuery();
  const defaultAddressId = data?.default_address?.id || null;

  const [recipientFirstName, setRecipientFirstName] = useState('');
  const [recipientLastName, setRecipientLastName] = useState('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [shippingAddressId, setShippingAddressId] = useState<number | null>(defaultAddressId);
  const [order, setOrder] = useState<Order | null>(null);
  const [serverError, setServerError] = useState('');
  const [validationError, setValidationError] = useState('');

  console.log(shippingAddressId);

  const handleNameChange = (firstName: string, lastName: string) => {
    setRecipientFirstName(firstName);
    setRecipientLastName(lastName);
  };

  useEffect(() => {
    if (isSuccess && data) {
      setRecipientFirstName(data.first_name);
      setRecipientLastName(data.last_name);
      setContactPhone(data.phone_number || '');
      if (defaultAddressId) {
        setShippingAddressId(defaultAddressId);
      }
    }
  }, [data, isSuccess, defaultAddressId]);

  useEffect(() => {
    document.body.classList.remove('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const handlePayment = async (orderId: number) => {
    try {
      const {payment_url} = await createPayment(orderId).unwrap();
      window.location.href = payment_url;
    } catch (err) {
      setServerError('Order creation failed. Please try again.');
    }
  };

  const validateForm = () => {
    if (!shippingAddressId || !contactPhone) {
      setValidationError('Please ensure you have selected a shipping address and provided a contact phone number.');
      return false;
    }
    setValidationError('');
    return true;
  };

  const handleProceedToPayment = async () => {
    if (!validateForm()) {
      return;
    }

    const orderData = {
      recipient_first_name: recipientFirstName,
      recipient_last_name: recipientLastName,
      contact_phone: contactPhone,
      shipping_address_id: shippingAddressId,
    };

    console.log(orderData);

    try {
      const { id, ...orderDetails } = await createOrderFromCart(orderData).unwrap();
      setOrder({ id, ...orderDetails });
      await handlePayment(id);
    } catch (error) {}
  };

  return (
    <div className={s.checkout}>
      <div className={s.checkout__blocks}>
        <div className={s.checkout__contacts}>
          <ContactInformation />
          <AddressOrderInformation
            onAddressSelect={setShippingAddressId}
            addressSelected={shippingAddressId}
            onNameChange={handleNameChange}
          />

          {validationError && <p className={s.error}>{validationError}</p>}
          {serverError && <p className={s.error}>{serverError}</p>}

          <div className={s.checkout__payment_btn_wrapper}>
            <Button
              isDisabled={!shippingAddressId}
              className={s.checkout__payment_btn}
              title="Proceed to Payment"
              onClick={handleProceedToPayment}
            />
          </div>
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};
