import { useLocation, useParams } from 'react-router';
import { AppRoute } from '../enum/app-route-enum';

export const useIsProductPage = (): boolean => {
  const { pathname } = useLocation();
  const { slug } = useParams();
  const isProductPage = pathname === `${AppRoute.CATALOG}/${slug}`;

  return isProductPage;
};
