/* eslint-disable comma-dangle */
import CONFIG from '../../globals/config';

const createRestaurantListTemplate = (restaurant) => `
    <article class="post-item">
        <p tabindex="0"  id="post-item__city">
      ${restaurant.city}
        </p>
        <img class="post-item__thumbnail lazyload"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
        alt="${restaurant.name}"
        />
        <div class="post-item__content">
            <p tabindex="0"  class="post-item__rating">
            <span class="fa fa-star checked"></span> 
            <span class="post-item__rating__score">${restaurant.rating}</span>
            </p>
            <h3 tabindex="0" class="post-item__title"><a href="/#/detail/${restaurant.id}">${
  restaurant.name
}</a></h3>
            <p tabindex="0"  class="post-item__description">
            ${restaurant.description}
            </p>
      </div>
    </article>
`;

const createRestaurantDetailTemplate = ({
  pictureId,
  name,
  address,
  city,
  description,
  menus,
  customerReviews,
}) => {
  const { foods, drinks } = menus;
  const food = foods.map((item) => `<li tabindex="0">${item.name}</li>`).join('');
  const drink = drinks.map((item) => `<li tabindex="0">${item.name}</li>`).join('');
  const review = customerReviews
    .map(
      (item) => `
    <p tabindex="0">Nama: ${item.name}</p>
    <p tabindex="0">Review: ${item.review}</p>
    <p tabindex="0">Date: ${item.date}</p>
    <br/>
  `
    )
    .join('');
  return `
    <article id="detail" >
      <div class="detail-item">
        <div class="detail-item__post">
          <img class="detail-item__image"
          src="${CONFIG.BASE_IMAGE_URL + pictureId}"
          alt="${name}"
          />
          <div class="detail-item__info">
            <h3 tabindex="0">${name}</h3>
            <p>${address}</p>
            <p>${city}</p>
            <p tabindex="0">
              ${description}
            </p>
          </div>
        </div>
        <div class="detail-item__menu">
          <h4 tabindex="0">Menu Makanan:</h4>
          ${food}
          <h4 tabindex="0">Menu Minuman:</h4>
          ${drink} 
        </div>
      </div>
      <h3>Customer Reviews:</h3>
      <div class="detail-item__review">
        ${review}
      </div>
    </article>
`;
};

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
