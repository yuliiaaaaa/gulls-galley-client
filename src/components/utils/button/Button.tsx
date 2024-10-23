import { ButtonType } from "../../../libs/types/Button";

type ButtonProps = {
  title?: string;
  className: string;
  type?: ButtonType;
  isDisabled: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ title, className = '', type = 'button', isDisabled, onClick, children }) => {
  return (
    <button className={className} type={type} disabled={isDisabled} onClick={onClick}>
      {title || children}
    </button>
  );
};
