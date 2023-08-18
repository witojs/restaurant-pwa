import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants.length) {
      return `
        <section id="main-content" class="content">
          <div class="latest">
            <h1 tabindex="0" class="latest__label">Your Favorite Restaurant</h1>
            <div class="posts" id="post">
              
            </div>
          </div>
        </section>
      `;
    }
    return `
        <section id="main-content" class="content">
          <h1 class="main-content__not__found">
            Tidak ada restaurant untuk ditampilkan
          </h1>
        </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#post');
    restaurants.forEach((item) => {
      restaurantsContainer.innerHTML += createRestaurantListTemplate(item);
    });
  },
};

export default Favorite;
