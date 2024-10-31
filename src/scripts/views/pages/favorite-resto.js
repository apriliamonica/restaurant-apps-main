import RestoDbSource from "../../datas/resto-api";
import { createMovieItemTemplate } from "../templates/template-creator";

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
      restoContainer.innerHTML += createMovieItemTemplate(resto);
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default favorite;
