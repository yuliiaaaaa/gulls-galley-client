import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  to: string;
  className?: string;
};

export const LinkComponent: FC<Props> = ({ children, to, className }) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};
