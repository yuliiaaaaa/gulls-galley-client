import { Navigate, useLocation } from 'react-router';
import { AppRoute } from '../../libs/enum/app-route-enum';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useIsAuthPage } from '../../libs/hooks/useIsAuthPage';
import { AuthPagesRoutes } from '../../libs/consts/app';

type Props = {
  children: React.ReactNode;
};

export const AuthWrapper: React.FC<Props> = ({ children }) => {
  const isAuthPage = useIsAuthPage(AuthPagesRoutes);
  const token = useAppSelector((state) => state.auth.accessToken);

  if (token && isAuthPage) {
    return <Navigate to={AppRoute.USER_PAGE} replace />;
  }

  return <>{children}</>;
};
