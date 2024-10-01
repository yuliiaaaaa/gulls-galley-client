import { useLocation } from 'react-router';
import { AppRoute } from '../enum/app-route-enum';

export const useIsNotFoundPage = () => {
  const { pathname } = useLocation();

  const isNotFoundPage = pathname === AppRoute.NOT_FOUND_PAGE;

  return isNotFoundPage;
};
