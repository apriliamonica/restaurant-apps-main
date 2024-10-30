import RestoDbSource from "../../data/themoviedb-source";
const favorite = {
  async render() {
    return `
      <h2>Favorite</h2>
    `;
  },

  async afterRender() {
    const movies = await RestoDbSource.favoriteResto();
    console.log(movies);
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default favorite;
