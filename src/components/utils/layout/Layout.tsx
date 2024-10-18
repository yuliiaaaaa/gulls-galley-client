import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../../footer/Footer';
import { Header } from '../../header/Header';
import ScrollToTop from '../../../libs/helpers/scrollTop';
import { useIsAuthPage } from '../../../libs/hooks/useIsAuthPage';
import { AppRoute } from '../../../libs/enum/app-route-enum';
import s from './layout.module.scss';
import cn from 'classnames';
import { CheckoutHeader } from '../../header/CheckoutHeader';

export const Layout = () => {
  const isFooterNotShown = useIsAuthPage([AppRoute.SIGN_UP, AppRoute.LOG_IN, AppRoute.CHECKOUT]);
  const { pathname } = useLocation();
  const isCheckout = pathname === AppRoute.CHECKOUT;

  return (
    <>
      <ScrollToTop />
      {isCheckout ? <CheckoutHeader /> : <Header />}
      <main className={cn(s.main, { [s.main__auth]: isFooterNotShown })}>
        <Outlet />
      </main>
      {!isFooterNotShown && <Footer />}
    </>
  );
};
