import home from '../views/pages/home-resto';
import favorite from '../views/pages/favorite-resto';
import Detail from '../views/pages/detail-resto';
import review from '../views/pages/detail-resto';

const routes = {
  '/': home,
  '/home': home,
  '/favorite': favorite,
  '/detail/:id': Detail,
  '/review': review,
};

export default routes;
