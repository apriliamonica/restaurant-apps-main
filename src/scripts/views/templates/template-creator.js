import CONFIG from "../../globals/config";

// const createMovieDetailTemplate = (movie) => `
//   <h2 class="movie__title">${movie.title}</h2>
//   <img class="movie__poster" src="${
//     CONFIG.BASE_IMAGE_URL + movie.poster_path
//   }" alt="${movie.title}" />
//   <div class="movie__info">
//     <h3>Information</h3>
//     <h4>Tagline</h4>
//     <p>${movie.tagline}</p>
//     <h4>Release Date</h4>
//     <p>${movie.release_date}</p>
//     <h4>Duration</h4>
//     <p>${movie.runtime} minutes</p>
//     <h4>Rating</h4>
//     <p>${movie.vote_average}</p>
//   </div>
//   <div class="movie__overview">
//     <h3>Overview</h3>
//     <p>${movie.overview}</p>
//   </div>
// `;

const createMovieItemTemplate = (resto) => `
   <div class="list">
               <div class="con-img">
                   <img src="${
                     CONFIG.MEDIUM_IMAGE_URL + resto.pictureId
                   }" alt="Gambar ${resto.nama}" />
                </div>
                <div class="ratting">
                  <i class="bx bx-star"></i>
                  <i>${resto.rating}</i>
                </div>
                <div class="list-info">
                  <h3 tabindex="0">${resto.name}</h3>
                  <h2>${resto.city}</h2>
                  <p>${resto.description}</p>
                </div>
              </div>
`;

export { createMovieItemTemplate };
//  createMovieDetailTemplate;
