import { Navigate, useRoutes } from 'react-router-dom';
import Nodefind from './404';
import Layout from './Layout';
import ListPage from './List';
import ListOne from './ListOne';
import ListTow from './ListTow';
import HomePage from './Home';

const CustomRoutes: React.FC = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'list',
          children: [
            { index: true, element: <ListPage /> },
            { path: 'one', element: <ListOne /> },
            { path: ':id', element: <ListTow /> },
          ],
        },
      ],
    },
    { path: 'nodefind', element: <Nodefind /> },
    { path: '*', element: <Navigate to="nodefind" /> },
  ]);
  return routes;
};

export default CustomRoutes;
