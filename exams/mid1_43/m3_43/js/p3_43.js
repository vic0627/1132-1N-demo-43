import { mid_products_43 } from './products_data_43.js';

console.log(mid_products_43);

document.querySelector('.products-container').innerHTML =
  mid_products_43.reduce((pre, { title, price, img }) => {
    return (pre += `
      <div class="single-product">
        <img
          src="${img}"
          class="single-product-img img"
          alt="${title}"
        />
        <footer>
          <h5 class="name">${title}</h5>
          <span class="price">$${price}</span>
        </footer>
      </div>`);
  }, '');
