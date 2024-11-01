import RestoDbSource from '../../datas/resto-api';
import { createRestoItemTemplate } from '../templates/template-creator';

const home = {
  async render() {
    return `
      <section class="home-section" id="home">
        <div class="hero-container">
          <img src="./images/heros/hero-image_2.jpg" alt="Hero Image" />
          <div class="hero-inner">
            <h1 class="hero-title">Welcome to Mukbang</h1>
            <p class="hero-tagline">
              Rasakan pengalaman makan yang luar biasa untuk setiap hidangan
              utama.
            </p>
          </div>
        </div>
      </section>

      <section div class="explore-section" id="explore">
        <div class="explore-container">
          <div class="explore-title">
            <h2>Explore Our Restaurant</h2>
          </div>
          <div id="container-resto">
            <div class="btn-item">
              <button id="allnotes" class="active">All Resto</button>
              <button id="favorite-btn" class="favorite-btn">Favorite</button>
            </div>
            <!-- List restaurants here -->
            <article class="restoran">
            </article>
          </div>
        </div>
      </section>

      <section>
        <div class="makanan-section">
          <div class="makanan-tittle">
            <h2>Best Menu</h2>
          </div>
        </div>
        <article class="best-food">
          <img src="./images/makanan/nasi-image_1.jpg" alt="Nasi Image" />
          <h3>Nasi Kuning</h3>
        </article>
      </section>
    `;
  },

  async afterRender() {
    const Resto = await RestoDbSource.homeResto();
    const restoContainer = document.querySelector('.restoran');
    Resto.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default home;
