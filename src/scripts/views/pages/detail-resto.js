import RestoDbSource from "../../datas/resto-api";
import { createMovieItemTemplate } from "../templates/template-creator";
import UrlParser from "../../routes/url.parser";

const detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDbSource.getDetailRestaurant(url.id);
    const restoContainer = document.querySelector("#movie");
    restoContainer.innerHTML = createMovieItemTemplate(resto);
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default detail;
