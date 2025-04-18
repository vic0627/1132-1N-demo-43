const $ = (e) => document.querySelector(e)

function changeImage(index) {
  $('.player > img').setAttribute('src', `./images/TKU${index}.png`)
}

function showTKU60() {
  $('.menu1 > ul').innerHTML = [1, 2, 3, 4, 5].reduce(
    (p, c) =>
      (p += `
    <li onclick="changeImage(${c})">
      <a href="#">淡江大戲 ${c}</a>
    </li>
  `),
    ''
  )
}

function clearMenu1All() {
  $('.menu1 > ul').innerHTML = ''
}
