import { menu_43 } from "./data_43.js";

console.log("menu_43", menu_43);

const section = document.querySelector(".section-center");

const displayMenuItems = () => {
  const menuInfo = menu_43
    .map((item) => {
      return `
      <article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
    })
    .join("");
  console.log(menuInfo);
  section.innerHTML = menuInfo;
};

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu_43);
});
