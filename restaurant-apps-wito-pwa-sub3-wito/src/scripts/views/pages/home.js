import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section id="main-content" class="content">
        <div class="latest">
          <h1 tabindex="0" class="latest__label">Explore Restaurant</h1>
          <div class="posts" id="post">
            
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('#post');
    restaurants.forEach((item) => {
      restaurantsContainer.innerHTML += createRestaurantListTemplate(item);
    });
  },
};

export default Home;
