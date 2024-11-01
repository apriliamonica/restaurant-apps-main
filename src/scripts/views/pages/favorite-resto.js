import RestoDbSource from '../../datas/resto-api';
import { createRestoItemTemplate } from '../templates/template-creator';

const favorite = {
  async render() {
    return `
      <div>
      
      <div>
    `;
  },

  async afterRender() {
    const Resto = await RestoDbSource.favoriteResto();
    const restoContainer = document.querySelector('#explore');
    Resto.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default favorite;
