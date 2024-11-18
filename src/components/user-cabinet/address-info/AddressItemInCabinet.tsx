import { useState } from 'react';
import { UserAddress } from '../../../libs/types/Addresses';
import { useDeleteAddressMutation } from '../../../redux/user/userApi';
import { Button } from '../../utils/button/Button';
import SvgIcon from '../../utils/svg-icon/SvgIcon';
import s from './AddressItemInCabinet.module.scss';
import cn from 'classnames';

type Props = {
  address: UserAddress;
  defaultAddress: UserAddress | null;
  onDelete: (id: number) => void;
  onEdit: (address: UserAddress) => void;
};

export const AddressItrmCabinet: React.FC<Props> = ({ address, defaultAddress, onDelete, onEdit }) => {
  return (
    <div className={s.card}>
      <div className={s.card__header}>
        <p className={cn(s.card__default_text, { [s.card__default_is]: defaultAddress?.id === address.id })}>Default</p>
        <SvgIcon id="edit" className={s.card__icon} onClick={() => onEdit(address)} />
      </div>
      <div className={s.card__address}>
        <p className={s.card__address_text}>{address.address}</p>
        <p className={s.card__address_text}>{`${address.city}, ${address.zip_code}`}</p>
      </div>
      <Button className={s.btn} isDisabled={false} title="Remove" onClick={() => onDelete(address?.id as number)} />
    </div>
  );
};
