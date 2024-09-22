import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../libs/enum/app-route-enum';
import { NotFoundPage } from '../404-page/NotFoundPage';
import { HomePage } from '../home/HomePage';
import { Layout } from '../../components/utils/layout/Layout';
import '../../sass/normalize.scss';
import { ProductPage } from '../product/ProductPage';
import { SignUpPage } from '../sign-up/SignUpPage';
import { LogInPage } from '../log-in/LogInPage';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: AppRoute.PRODUCT, element: <ProductPage /> },
        { path: AppRoute.ROOT, element: <HomePage /> },
        { path: AppRoute.SIGN_UP, element: <SignUpPage /> },
        { path: AppRoute.LOG_IN, element: <LogInPage /> },
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
