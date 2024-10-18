export interface UserAddress {
  id: number;
  address: string;
  country: string;
  region?: string;
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
  default_address?: string;
}

export type UserResponse = {
  message: string;
  data: UserProfile;
  success: boolean;
};
