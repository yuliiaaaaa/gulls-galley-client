import { UserAddress } from '../../../libs/types/Addresses';
import { AddressItrmCabinet } from './AddressItemInCabinet';
import s from './AddressesList.module.scss';

type Props = {
  addresses: UserAddress[];
  defaultAddress: UserAddress | null;
  onDelete: (id: number) => void;
  onEdit: (address: UserAddress) => void;
};

export const AddressesList: React.FC<Props> = ({ addresses, defaultAddress, onDelete ,onEdit}) => {
  return (
    <div className={s.list}>
      {addresses.map((address) => (
        <AddressItrmCabinet
          address={address}
          key={address.id}
          defaultAddress={defaultAddress}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};
