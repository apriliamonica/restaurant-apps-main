import RestoDbSource from '../../datas/resto-api';
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
    const resto = await RestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('.detail');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },
};

export default Detail;
