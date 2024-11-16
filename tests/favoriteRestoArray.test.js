/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';

let favoriteRestoran = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestoran.find((resto) => resto.id == id);
  },

  getAllResto() {
    return favoriteRestoran;
  },

  putResto(resto) {
    // eslint-disable-next-line no-prototype-builtins
    if (!resto.hasOwnProperty('id')) {
      return;
    }
    if (this.getResto(resto.id)) {
      return;
    }

    favoriteRestoran.push(resto);
  },

  deleteResto(id) {
    favoriteRestoran = favoriteRestoran.filter((resto) => resto.id != id);
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestoran = [];
  });

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});