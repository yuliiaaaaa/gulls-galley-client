import { useEffect, useState } from 'react';
import SvgIcon from '../../utils/svg-icon/SvgIcon';
import s from './AddressInformation.module.scss';
import { Button } from '../../utils/button/Button';
import { AddressForm } from './AddressForm';
import { useGetUserProfileQuery } from '../../../redux/user/userApi';
import { Form } from 'react-router-dom';
import { Formik } from 'formik';
import { CheckoutAddressValidationSchema } from '../../../libs/validation-schemas/checkout-addreess-validation';
import { UserAddress } from '../../../libs/types/Addresses';

type Props = {
  onAddressSelect: (addressId: number) => void;
  addressSelected: number | null;
  onNameChange: (firstName: string, lastName: string) => void;
};

export const AddressOrderInformation: React.FC<Props> = ({ onAddressSelect, addressSelected, onNameChange }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [editingAddress, setEditingAddress] = useState<UserAddress | null>(null);
  const { data, isSuccess } = useGetUserProfileQuery();
  const userAddresses = data?.addresses.filter((address) => !address.is_default);
  const defaultAddress = data?.default_address || null;

  const handleEditFormOpen = (address: UserAddress | null) => {
    setIsOpened((prev) => !prev);
    setEditingAddress(address);
  };

  const handleAddressSelect = (address: UserAddress) => {
    onAddressSelect(address?.id as number);
  };
  console.log(editingAddress);

  return (
    <div className={`${s.contacts} ${s.container}`}>
      <div className={s.contacts__content}>
        <div className={s.contacts__header}>
          <h1 className={s.contacts__title}>2. Ship to</h1>
        </div>

        <div>
          <Formik
            initialValues={{ addressSelected }}
            validationSchema={CheckoutAddressValidationSchema}
            onSubmit={() => {}}
          >
            {({ values, isValid, dirty }) => (
              <Form className={s.form}>
                <div className={s.contacts__addresses}>
                  {defaultAddress && (
                    <div className={s.contacts__address}>
                      <input
                        className={s.contacts__checkbox}
                        type="checkbox"
                        checked={addressSelected === defaultAddress.id}
                        onChange={() => handleAddressSelect(defaultAddress)}
                      />

                      <div className={s.contacts__address_block}>
                        <div className={s.contacts__address_header}>
                          <p className={s.input__default_text}>Default</p>
                          <SvgIcon
                            id="edit"
                            className={s.contacts__icon}
                            width={18}
                            height={19}
                            onClick={() => handleEditFormOpen(defaultAddress)}
                          />
                        </div>

                        <label className={s.contacts__address_text}>{defaultAddress?.address}</label>
                      </div>
                    </div>
                  )}
                  {userAddresses &&
                    userAddresses.map((address) => (
                      <div key={address.id} className={s.contacts__address}>
                        <input
                          type="checkbox"
                          className={s.contacts__checkbox}
                          checked={addressSelected === address.id}
                          onChange={() => handleAddressSelect(address)}
                        />

                        <div className={s.contacts__address_block}>
                          <div className={s.contacts__address_header}>
                            <label className={s.contacts__address_text}>{address.address}</label>
                            <SvgIcon
                              id="edit"
                              className={s.contacts__icon}
                              width={18}
                              height={19}
                              onClick={() => handleEditFormOpen(address)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {!isOpened ? (
          <Button
            className={s.btn}
            isDisabled={false}
            title="Add new address"
            onClick={() => handleEditFormOpen(null)}
          />
        ) : (
          <AddressForm
            setIsOpened={setIsOpened}
            onNameChange={onNameChange}
            initialValues={
              editingAddress || {
                address: '',
                country: '',
                region: '',
                city: '',
                zip_code: '',
                is_default: false,
              }
            }
          />
        )}
      </div>
    </div>
  );
};
