import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  to: string;
  className?: string;
  router?: boolean;
};

export const LinkComponent: FC<Props> = ({ children, to= '', className, router = false }) => {
  return (
    <>
      {router ? (
        <Link to={to} className={className}>
          {children}
        </Link>
      ) : (
        <a href={to} className={className}>
          {children}
        </a>
      )}
    </>
  );
};
