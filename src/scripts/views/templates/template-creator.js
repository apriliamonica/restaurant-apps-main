import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="movie__title">${resto.title}</h2>
  <img class="movie__poster" src="${
  CONFIG.MEDIUM_IMAGE_URL + resto.poster_path
}" alt="${resto.title}" />
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${resto.tagline}</p>
    <h4>Release Date</h4>
    <p>${resto.release_date}</p>
    <h4>Duration</h4>
    <p>${resto.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${resto.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${resto.overview}</p>
  </div>
`;

const createRestoItemTemplate = (resto) => `
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

export { createRestoItemTemplate, createRestoDetailTemplate };
