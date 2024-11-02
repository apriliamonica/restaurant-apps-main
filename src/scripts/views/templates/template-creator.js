import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <article class="detail">
              <div class="detail-title">
                <h2>${resto.name}</h2>
              </div>
              <div class="detail-image">
                <img src="${CONFIG.MEDIUM_IMAGE_URL + resto.pictureId}" alt="${
  resto.name
}" />
              </div>
              <div class="detail-info">
                <h3>${resto.city}</h3>           
                <div class="ratting">
                  <i>${resto.rating}</i>
                </div>
                <div class="detail-description">
                  <p>${resto.description}</p>
                </div>
              </div>
              <div class="restaurant__reviews">
                <h4>Reviews</h4>
                <ul id="reviews-list"></ul>
              </div>
            </article>
`;

const createRestoItemTemplate = (resto) => `
   <div class="list">
               <div class="con-img">
              <img src="${CONFIG.MEDIUM_IMAGE_URL + resto.pictureId}" alt="${
  resto.name
}" />
</div>
                <div class="ratting">
                  <i class="bx bx-star"></i>
                  <i>${resto.rating}</i>
                </div>
                <div class="list-info">
                <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
                  <h2>${resto.city}</h2>
                  <p>${resto.description}</p>
                </div>
              </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
