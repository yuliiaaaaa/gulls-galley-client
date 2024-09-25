// type Props={
//     tab:string;
// }

import { AddressInfo } from '../../components/user-cabinet/address-info/AddressInfo';
import { OrderInfo } from '../../components/user-cabinet/order-info/OrderInfo';
import { PersonalInfo } from '../../components/user-cabinet/personal-info/PersonalInfo';
import { ProfileTabs } from '../enum/ProfileTabs';

export const getUserPageScreen = (tab: string) => {
  switch (tab) {
    case ProfileTabs.ADDRESSES:
      return <AddressInfo />;
    case ProfileTabs.ORDERS:
      return <OrderInfo />;
    case ProfileTabs.PERSONAL:
      return <PersonalInfo />;
    default:
      return <></>;
  }
};
