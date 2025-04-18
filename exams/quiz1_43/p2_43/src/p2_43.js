import { data1 } from './data_43.js'

function h(e, d) {
  document.querySelector(e).innerHTML = `
    <h3 class='mt-4'>Array Statistics for ${e.replace('.', '')}</h3>
    ${d.reduce((p, c) => (p += `${c}°C = ${(c * 9) / 5 + 32}°F<br>`), '')}
  `
}

h('.result1', data1)

data1.push(64, 73, 82)
h('.result2', data1)
