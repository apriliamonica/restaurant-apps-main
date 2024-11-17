import { createRestoItemTemplate } from '../templates/template-creator';
import FavoriteRestoIdb from '../../../public/data/favorite-resto-idb';
const favorite = {
  async render() {
    return `
      <section class="explore-section" id="explore">
        <div class="explore-container">
          <div id="container-resto">
            <article class="restoran fav">
            </article>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const Resto = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('.restoran');
    Resto.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default favorite;
