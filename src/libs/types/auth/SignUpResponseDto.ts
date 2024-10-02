export type SignUpResponseDto = {
  user: User;
  refresh: string;
  access: string;
};

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  addresses?: [];
  default_address?: null;
  is_staff?: boolean;
};
