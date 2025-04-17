let c1 = 19;
let c2 = 28;
let f1 = (c1 * 9) / 5 + 32;
let f2 = (c2 * 9) / 5 + 32;

const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');
console.log(result1);

result1.textContent = `${c1}°C = ${f1}°F`;
result2.textContent = `${c2}°C = ${f2}°F`;
