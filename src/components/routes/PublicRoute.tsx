import React from 'react';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { Navigate } from 'react-router';
import { AppRoute } from '../../libs/enum/app-route-enum';

type Props = {
  children: React.ReactNode;
};

export const PublicRoute: React.FC<Props> = ({ children }) => {
  const token = useAppSelector((state) => state.auth.accessToken);

  if (!token) {
    return <Navigate to={AppRoute.LOG_IN} replace />;
  }

  return <>{children}</>;
};
