import { Navigate } from 'react-router';
import { AppRoute } from '../../libs/enum/app-route-enum';
import { useAppSelector } from '../../redux/hooks/useAppSelector';

type Props = {
  children: React.ReactNode;
};

export const PrivateRoute: React.FC<Props> = ({ children }) => {
  const token = useAppSelector((state) => state.auth.accessToken);

  if (!token) {
    return <Navigate to={AppRoute.LOG_IN} replace />;
  }

  return <>{children}</>;
};
