import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import routesGenerator from '../utils/routesGenerator';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MainLayout from '../components/layout/MainLayout';
import { homePaths } from './home.routes';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children:routesGenerator(homePaths)
  },
  {
    path: '/admin',
    element: <App />,
    // children: routesGenerator(adminPaths),
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
