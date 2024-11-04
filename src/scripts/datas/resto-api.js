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
      foods: restaurant.menus.foods.map((food) => food.name),
      drinks: restaurant.menus.drinks.map((drink) => drink.name), // Assuming this is a new property in the API response
    };
  }

  static async favoriteResto() {
    const response = await fetch(API_ENDPOINT.DETAIL);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
}

export default RestoDbSource;
