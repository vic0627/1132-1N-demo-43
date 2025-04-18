import menu_43 from './data_43.js'

const $ = (e) => document.querySelector(e)

console.log('menu_43', menu_43)

const displayMenuItems = (menuItems) => {
  $('.menu-center').innerHTML = menuItems.reduce(
    (p, { img, title, price, desc }) =>
      (p += `
    <article class="menu-item">
      <img src=${img} alt="${title}" class="photo"/>
      <div class="item-info">
        <header>
          <h4>${title}</h4>
          <h4 class="price">$${price}</h4>
        </header>
        <p class="item-text">
          ${desc}
        </p>
      </div>
    </article>
  `),
    ''
  )
}

const displayMenuButtons = () => {
  $('.btn-center').innerHTML = ['all', ...new Set(menu_43.map(({ category }) => category))].reduce(
    (p, c) => (p += `<button type="button" class="filter-btn" data-id=${c}>${c}</button>`),
    ''
  )
  $('.btn-center').addEventListener('click', ({ target: e }) => {
    if (!e.dataset.id) return
    const cat = e.dataset.id
    displayMenuButtons(menu_43.filter(({ category }) => cat === 'all' || cat === category))
  })
}

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu_43)
  displayMenuButtons()
})
