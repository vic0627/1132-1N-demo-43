import { tours_43 } from "./data_43.js";

const section = document.querySelector(".section-center");

const displayTours = () => {
  const toursInfo = tours_43
    .map((tour) => {
      return `<article class="single-tour">
            <img src="${tour.img}" alt="${tour.name}" />
            <footer>
              <div class="tour-info">
                <h4>${tour.name}</h4>
                <h4 class="tour-price">$${tour.price}</h4>
              </div>
              <p>
                ${tour.info}<button>read more</button>
              </p>
              <button class="delete-btn">not interested</button>
            </footer>
          </article>`;
    })
    .join("");
  section.innerHTML = toursInfo;
  console.log(toursInfo);
};

window.addEventListener("DOMContentLoaded", () => {
  displayTours();
});
console.log("tours_43", tours_43);
