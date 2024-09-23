import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../../footer/Footer';
import { Header } from '../../header/Header';
import ScrollToTop from '../../../libs/helpers/scrollTop';
import { useIsAuthPage } from '../../../libs/hooks/useIsAuthPage';
import { AppRoute } from '../../../libs/enum/app-route-enum';

export const Layout = () => {
  const isFooterNotShown = useIsAuthPage([AppRoute.SIGN_UP, AppRoute.LOG_IN]);
  
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      {!isFooterNotShown && <Footer />}
    </>
  );
};
