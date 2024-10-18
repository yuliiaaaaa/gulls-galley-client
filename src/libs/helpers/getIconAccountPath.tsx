import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { AppRoute } from '../enum/app-route-enum';

export const getIconAccountPath = () => {
  const token = useAppSelector((state) => state.auth.accessToken);

  return token ? AppRoute.USER_PAGE : AppRoute.LOG_IN;
};
