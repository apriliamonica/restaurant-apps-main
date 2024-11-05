import API_ENDPOINT from '../globals/api-endpoint';

class RestoDbSource {
  static async homeResto() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    const { restaurant } = responseJson;
    return {
      id: restaurant.id,
      name: restaurant.name,
      description: restaurant.description,
      rating: restaurant.rating,
      address: restaurant.address,
      city: restaurant.city,
      customerReviews: restaurant.customerReviews.map((customer) => customer),
      pictureId: restaurant.pictureId,
      categories: restaurant.categories.map((categori) => categori.name),
      foods: restaurant.menus.foods,
      drinks: restaurant.menus.drinks,
    };
  }

  static async favoriteResto() {
    const response = await fetch(API_ENDPOINT.DETAIL);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  // static async createriview(riview) {
  //   try {
  //     const options = {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         id: riview.id,
  //         name: riview.name,
  //         review: riview.review,
  //       }),
  //   }
  //     const responseJson = await response.json();
  //     console.log(responseJson);

  //     return responseJson;
  //   } catch (error) {
  //     alert('gagal menambahkan notes');
  //   }
  // }
}

export default RestoDbSource;
