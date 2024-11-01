import home from '../views/pages/home-resto';
import favorite from '../views/pages/favorite-resto';
import Detail from '../views/pages/detail-resto';

const routes = {
  '/': home,
  '/home': home,
  '/favorite': favorite,
  '/detail/:id': Detail,
};

export default routes;
