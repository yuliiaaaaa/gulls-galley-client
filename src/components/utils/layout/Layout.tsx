import { Outlet } from 'react-router-dom';
import { Footer } from '../../footer/Footer';

export const Layout = () => {
  return (
    <>
      <h1>Header</h1>
      <Outlet />
      <Footer />
    </>
  );
};
