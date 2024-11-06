import FavoriteRestoIdb from '../../../public/data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const favorite = {
  async render() {
    return `
      <section class="explore-section" id="explore">
        <div class="explore-container">
          <div id="container-resto">
            <article class="restoran">
            </article>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const Resto = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#explore');
    Resto.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default favorite;
