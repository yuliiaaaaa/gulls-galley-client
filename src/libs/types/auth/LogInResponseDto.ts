import { User } from "./SignUpResponseDto";

export type LogInResponseDto = {
  access: string;
  refresh: string;
  user: User | null;
};
