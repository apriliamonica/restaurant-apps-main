import RestoDbSource from '../../datas/resto-api';
import { createRestoItemTemplate } from '../templates/template-creator';

const home = {
  async render() {
    return `
      <section class="home-section" id="home">
        <div class="hero-container">
          <picture>
            <source type="image/webp" srcset="./images/heros/hero-image_2.webp">
            <source type="image/jpeg" srcset="./images/heros/hero-image_2.jpg">
            <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2.jpg">
            <img class="lazyload" src="./images/heros/hero-image_2.jpg" alt="Hero Image" />
          </picture>
          <div class="hero-inner">
            <h1 class="hero-title">Welcome to Mukbang</h1>
            <p class="hero-tagline">
              Rasakan pengalaman makan yang luar biasa untuk setiap hidangan
              utama.
            </p>
          </div>
        </div>
      </section>

      <section class="explore-section" id="explore">
        <div class="explore-container">
          <div class="explore-title">
            <h2>Explore Our Restaurant</h2>
          </div>
          <div id="container-resto">
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
        <picture>
    <source type="image/webp" srcset="./images/makanan/nasi-image_1.webp">
    <source type="image/jpeg" srcset="./images/makanan/nasi-image_1.jpg">
    <source media="(max-width: 600px)" data-srcset="./images/makanan/nasi-image_1.jpg">
          <img class="lazyload" data-src="./images/makanan/nasi-image_1.jpg" alt="Nasi Image" />
  </picture>
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
