import { Link } from 'react-router-dom';
import s from './Logo.module.scss';
import { AppRoute } from '../../libs/enum/app-route-enum';

type Props = {
  className?: string;
};

export const Logo: React.FC<Props> = ({ className = '' }) => {
  return (
    <Link to={AppRoute.ROOT} className={`${s.logo} ${className}`}>
      Gulls& Galley.
    </Link>
  );
};
