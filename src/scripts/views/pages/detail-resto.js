import RestoDbSource from '../../datas/resto-api';
import UrlParser from '../../routes/url-parser';
import {
  createRestoDetailTemplate,
  createMenusTemplate,
  createReviewTemplate,
} from '../templates/template-creator';
import LikeButtonPresenter  from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../../public/data/favorite-resto-idb';
const Detail = {
  async render() {
    return `
      <article class="detail"></article>
       <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restodetail = await RestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('.detail');
    restoContainer.innerHTML = createRestoDetailTemplate(restodetail);
    const makanan = restodetail.foods;
    const minuman = restodetail.drinks;
    const customer = restodetail.customerReviews;
    const foodContainer = document.querySelector('#menu-makanan');
    const drinksContainer = document.querySelector('#menu-minuman');
    const customerContainer = document.querySelector('.review-list');

    makanan.forEach((makan) => {
      foodContainer.innerHTML += createMenusTemplate(makan.name);
    });
    minuman.forEach((minum) => {
      drinksContainer.innerHTML += createMenusTemplate(minum.name);
    });

    customer.forEach((review) => {
      customerContainer.innerHTML += createReviewTemplate(review);
    });

    const form = document.querySelector('#restoForm');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const id = restodetail.id;
      const nama = document.querySelector('#nama').value;
      const review = document.querySelector('#review').value;
      const date = new Date().toISOString;

      const tambahRiview = RestoDbSource.getRiview(id, nama, review, date);

      await RestoDbSource.createriview(tambahRiview);
      const newreview = await RestoDbSource.detailResto(url.id);
      const reviewlist = newreview.customerReviews;
      customerContainer.innerHTML = '';

      reviewlist.forEach((review) => {
        customerContainer.innerHTML += createReviewTemplate(review);
      });
    });

    LikeButtonPresenter .init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestoran: FavoriteRestoIdb,
      resto: {
        id: restodetail.id,
        name: restodetail.name,
        description: restodetail.description,
        rating: restodetail.rating,
        address: restodetail.address,
        city: restodetail.city,
        customerReviews: restodetail.customerReviews,
        pictureId: restodetail.pictureId,
        categories: restodetail.categories,
        foods: restodetail.foods,
        drinks: restodetail.drinks,
      },
    });
  },
};

export default Detail;
