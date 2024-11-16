/* eslint-disable no-undef */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestoIdb from '../src/public/data/favorite-resto-idb';

describe('Liking A Resto', () => {
  /* ...kode lainnya disembunyikan... */

  it('should be able to like the resto', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1,
      },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Memastikan film berhasil disukai
    const resto = await FavoriteRestoIdb.getAllResto(1);
    expect(resto).toEqual[{ id: 1 }];

    await FavoriteRestoIdb.deleteResto(1);
  });
});