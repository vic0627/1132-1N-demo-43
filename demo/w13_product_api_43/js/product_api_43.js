const p = document.querySelector(".products-container");

const url = "https://www.course-api.com/javascript-store-products";

const products_43 = [];

const fetchProducts = async (url) => {
  try {
    const data = await (await fetch(url)).json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const displayProducts = (products) => {
  p.innerHTML = products.reduce((html, { fields }) => {
    const { image, name, price } = fields;
    return (html += `
        <div class="single-product">
        <img
          src=${image[0]?.url}
          class="single-product-img img"
          alt=${name}
        />
        <footer>
          <h3 class="name">${name}</h3>
          <span class="price">$${price}</span>
        </footer>
      </div>
  `);
  }, "");
};

document.addEventListener("DOMContentLoaded", async () => {
  products_43.push(...(await fetchProducts(url)));
  displayProducts(products_43);
});
