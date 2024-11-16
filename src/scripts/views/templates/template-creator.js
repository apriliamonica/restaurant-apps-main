import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <article class="detail">
              <div class="detail-image">
                <img src="${CONFIG.MEDIUM_IMAGE_URL + resto.pictureId}" alt="${
  resto.name
}" />
              </div>
              <div class="detail-title">
                <h2>${resto.name}</h2>
              </div>
              <div class="detail-info">
                <div class="address">
                  <h3 class="details">Alamat</h3>
                  <p>${resto.address}</p>
                </div>
                <div class="city">
                  <h3 class="details">Kota</h3>
                   <p>${resto.city}</p>
                </div>           
                <div class="ratting">
                <h3 class="details">Ratting</h3>
                  <i>${resto.rating}</i>
                </div>
                <div class="categories-resto">
                <h3 class="details">Categories</h3>
                <p>${resto.categories}</p>
              </div>
                <div class="detail-description">
                <h3 class="details">Deskripsi</h3>
                  <p>${resto.description}</p>
                </div>
              </div>
            </article>

            <article class="detail-menu">
      <div class="menu">
          <h3>Makanan</h3>
        <div class="list-menu" id="menu-makanan">
        </div>
        <div class="menu">
          <h3>Minuman</h3>
          <div class="list-menu" id="menu-minuman"></div>
        </div>
  </article>

      <article class="riview-resto">
        <div class="riview-container">
        <h1>Form Review</h1>
        <form id="restoForm" autocomplete="off">
          <div>
            <label class="label-judul" for="nama">Nama</label>
            <input
            id="nama"
              name="nama"
              type="text"
              required
              placeholder="nama"
              minlength="5"
            />
          </div>
          <div>
            <label class="label-judul" for="review">Review</label>
            <textarea
            id="review"
              name="Review"
              required
              placeholder="review"
              minlength="10"
            ></textarea>
          </div>
          <button id="FormSubmit" type="submit">Kirim</button>
        </form>
    </div>
     <div class="review-list">
       <h3>Customer Review</h3>
     </div>
      </article>       
`;

const createMenusTemplate = (menus) => `
  <p>${menus}</p>
`;

const createReviewTemplate = (review) => `
  <div class="review-item">
  <h4>${review.name}</h4> 
  <p>${review.review}</p> 
  <p>${review.date}</p> 
  </div>
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
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createMenusTemplate,
  createReviewTemplate,
};
