import { _supabase } from './clientSupabase.js';

const productContainer = document.querySelector('.products-container');

let products_43 = [];

const fetchProducts = async () => {
  try {
    let { data, error } = await _supabase.from('product_43').select('*');
    console.log('data', data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { id, title, price, img } = product;
      return `
        <div class="single-product">
        <img
          src=${img}
          class="single-product-img img"
          alt=${title}
        />
        <footer>
          <h3 class="name">${id}-${title}</h3>
          <span class="price">$${price}</span>
        </footer>
      </div>
    `;
    })
    .join('');
  productContainer.innerHTML = productsContent;
};

document.addEventListener('DOMContentLoaded', async () => {
  products_43 = await fetchProducts();
  displayProducts(products_43);
});

