import { Link } from 'react-router-dom';
import s from './Logo.module.scss';
import { AppRoute } from '../../libs/enum/app-route-enum';

export const Logo = () => {
  return (
    <Link to={AppRoute.ROOT} className={s.logo}>
      Gulls& Galley.
    </Link>
  );
};
