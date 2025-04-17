import { data1 } from './data_43.js';
const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');
console.log('data1', data1);

const outputStat = (s, result) => {
  const headingText = `<h3 class='mt-4'> Array Statistics for ${
    result === 'result1' ? 'result1' : 'result2'
  } </h3>`;

  const resultText = s
    .map((c) => {
      let f = (c * 9) / 5 + 32;
      return `
        ${c}°C = ${f}°F <br />
    `;
    })
    .join('');
  console.log('resultText', resultText);
  if (result === 'result1') {
    result1.innerHTML = headingText + resultText;
  } else if (result === 'result2') {
    result2.innerHTML = headingText + resultText;
  }
};

outputStat(data1, 'result1');
// result1.textContent = `20°C = 68°F`;

// add 3 more
data1.push(64, 73, 82);
console.log('data1', data1);
outputStat(data1, 'result2');
