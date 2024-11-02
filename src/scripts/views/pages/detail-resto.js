import RestoDbSource from '../../datas/resto-api';
import { createRestoItemTemplate } from '../templates/template-creator';
import UrlParser from '../../routes/url.parser';
import {
  createRestoDetailTemplate,
  createLikeButtonTemplate,
} from '../templates/template-creator';
const Detail = {
  async render() {
    return `
      <article class="detail"></article>
       <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDbSource.getDetailRestaurant(url.id);
    const restoContainer = document.querySelector('.detail');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    restoContainer.innerHTML = createRestoItemTemplate(resto);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },
};

export default Detail;
