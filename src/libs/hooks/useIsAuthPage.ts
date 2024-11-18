import { useLocation } from 'react-router';

export const useIsAuthPage = (routes: string[]) => {
  const { pathname } = useLocation();

  const isAuthPage = routes.some((route) => route === pathname);

  return isAuthPage;
};
