export type SignUpRequestDto = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  confirmPassword: string;
  //password_confirm;
};
