import RestoDbSource from "../../datas/resto-api";
import { createRestoItemTemplate } from "../templates/template-creator";

const favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Upcoming in Cinema</h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const Resto = await RestoDbSource.favoriteResto();
    const restoContainer = document.querySelector("#explore");
    Resto.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default favorite;
