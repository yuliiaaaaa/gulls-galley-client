import { useLocation, useParams } from 'react-router';

export const useIsHeaderStyledPAge = (routes: string[]): boolean => {
  const { pathname } = useLocation();

  const isStyledHeader = routes.some((route) => route === pathname);
  return isStyledHeader;
};
