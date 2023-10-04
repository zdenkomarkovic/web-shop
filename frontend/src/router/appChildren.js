import ContactPage from '../pages/ContactPage/ContactPage';
import HomePage from '../pages/HomePage/HomePage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import ShopPage from '../pages/ShopPage/ShopPage';
import { routes } from './routes';

export const appChildren = [
  {
    path: routes.HOME.path,
    element: <HomePage />,
  },
  {
    path: routes.SHOP.path,
    element: <ShopPage />,
  },
  {
    path: routes.CONTACT.path,
    element: <ContactPage />,
  },
  {
    path: routes.REGISTER.path,
    element: <RegisterPage />,
  },
];
