import { CountryKey, RegionKey } from '../../components/checkout/address-info/CountryData';

export interface UserAddress {
  id?: number;
  address: string;
  country: CountryKey | '';
  region?: RegionKey | '';
  city: string;
  zip_code: string;
  is_default: boolean;
}

export interface PaginatedUserAddressList {
  count: number;
  next?: string | null;
  previous?: string | null;
  data: UserAddress[];
}

export interface UserProfile {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string;
  addresses: UserAddress[];
  default_address?: UserAddress;
}

export type UserResponse = {
  message: string;
  data: UserProfile;
  success: boolean;
};
