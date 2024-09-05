import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../libs/enum/app-route-enum';
import { NotFoundPage } from '../404-page/NotFoundPage';

function App() {
  const router = createBrowserRouter([{ path: AppRoute.ANY, element: <NotFoundPage /> }]);

  return <RouterProvider router={router} />;
}

export default App;
