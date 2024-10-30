import UrlParser from "../../routes/url-parser";
import RestoDbSource from "../../data/themoviedb-source";

const detail = {
  async render() {
    return `
      <h2>Detail Page</h2>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await RestoDbSource.detailMovie(url.id);
    console.log(movie);

    // Fungsi ini akan dipanggil setelah render()
  },
};

export default detail;
