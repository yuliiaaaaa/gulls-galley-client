import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../libs/enum/app-route-enum';
import { NotFoundPage } from '../404-page/NotFoundPage';
import { HomePage } from '../home/HomePage';
import { Layout } from '../../components/layout/Layout';
import '../../sass/normalize.scss'

function App() {
  const router = createBrowserRouter([
   { element: <Layout />,  
    children: [
      { path: AppRoute.ROOT, element: <HomePage /> },

    ],
  },
  { path: AppRoute.ANY, element: <NotFoundPage /> }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
