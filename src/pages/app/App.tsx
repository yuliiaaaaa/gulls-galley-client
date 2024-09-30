import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../libs/enum/app-route-enum';
import { NotFoundPage } from '../404-page/NotFoundPage';
import { HomePage } from '../home/HomePage';
import { Layout } from '../../components/utils/layout/Layout';
import '../../sass/normalize.scss';
import { ProductPage } from '../product/ProductPage';
import { SignUpPage } from '../sign-up/SignUpPage';
import { LogInPage } from '../log-in/LogInPage';
import { UserPage } from '../user-page/UserPage';
import { PrivateRoute } from '../../components/routes/PrivateRoute';
import { Catalog } from '../catalog/Catalog';
import { AuthWrapper } from '../../components/routes/AuthWrapper';
import { CartPage } from '../cart/CartPage';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: AppRoute.PRODUCT, element: <ProductPage /> },
        { path: AppRoute.ROOT, element: <HomePage /> },
        {
          path: AppRoute.SIGN_UP,
          element: (
            <AuthWrapper>
              <SignUpPage />
            </AuthWrapper>
          ),
        },
        {
          path: AppRoute.LOG_IN,
          element: (
            <AuthWrapper>
              <LogInPage />
            </AuthWrapper>
          ),
        },
        { path: AppRoute.CATALOG, element: <Catalog /> },
        {
          path: AppRoute.USER_PAGE,
          element: (
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          ),
        },
      ],
    },
    { path: AppRoute.ANY, element: <NotFoundPage /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
