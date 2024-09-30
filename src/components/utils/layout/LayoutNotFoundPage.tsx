import { Outlet } from 'react-router-dom';
import { useIsAuthPage } from '../../../libs/hooks/useIsAuthPage';
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { Header } from '../../header/Header';

export const LayoutNotFoundPage = () => {

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
