import { useState } from 'react';
import { Button } from '../../utils/button/Button';
import s from './addressInfo.module.scss';
import { useDeleteAddressMutation, useGetUserProfileQuery } from '../../../redux/user/userApi';
import { AddressesList } from './AddressesList';
import { AddressForm } from '../../checkout/address-info/AddressForm';
import SvgIcon from '../../utils/svg-icon/SvgIcon';
import { UserAddress } from '../../../libs/types/Addresses';

export const AddressInfo = () => {
  const [isOpenedNewPage, setIsOpendNewPage] = useState(false);
  const { data, isSuccess, isLoading } = useGetUserProfileQuery();
  const addresses = data?.addresses || [];
  const userAddresses = addresses.filter((address) => !address.is_default);
  const defaultAddress = data?.default_address || null;
  const [removeAddress] = useDeleteAddressMutation();
  const [serverError, setServerError] = useState('');
  const [addressToEdit, setAddressToEdit] = useState<UserAddress | null>(null);
  const addressPageTitle = isOpenedNewPage ? 'New address' : 'Addresses';

  const handleDeleteAddress = async (id: number) => {
    try {
      await removeAddress(id).unwrap();
    } catch (err) {
      setServerError('Cannot delete address');
    }
  };
  const handleOpenForm = (address: UserAddress | null = null) => {
    setIsOpendNewPage(true);
    setAddressToEdit(address);
  };

  const handleCloseForm = () => {
    setIsOpendNewPage(false);
    setAddressToEdit(null);
  };

  return (
    <div className={s.address}>
      <div className={s.address__title_new_address_block}>
        <h1 className={s.address__title}>{addressPageTitle}</h1>
        <div className={s.address__back_block} onClick={handleCloseForm}>
          {isOpenedNewPage && (
            <>
              <SvgIcon id="arrow-left-category" />
              <p className={s.address__title_new_address_text}>Back to Addresses</p>
            </>
          )}
        </div>
      </div>

      {addresses.length === 0 && !isOpenedNewPage ? (
        <div className={s.address__block}>
          <p className={s.address__text}>You haven't added any addresses yet.</p>
        </div>
      ) : (
        !isOpenedNewPage && (
          <div className={s.address__list}>
            <AddressesList
              addresses={addresses}
              defaultAddress={defaultAddress}
              onDelete={handleDeleteAddress}
              onEdit={handleOpenForm}
            />
          </div>
        )
      )}

      {serverError && <p className={s.err}>{serverError}</p>}

      {!isOpenedNewPage && (
        <Button className={s.address__button} isDisabled={false} title="Add new address" onClick={handleOpenForm} />
      )}

      {isOpenedNewPage && <AddressForm setIsOpened={setIsOpendNewPage} onNameChange={() => {}} initialValues={addressToEdit} />}
    </div>
  );
};
