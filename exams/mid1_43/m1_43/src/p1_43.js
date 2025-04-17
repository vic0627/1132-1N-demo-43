const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');
const result3 = document.querySelector('.result3');

let h1 = 1.75,
  w1 = 55;
let h2 = 1.75,
  w2 = 70;
let h3 = 1.75,
  w3 = 85;

function bmiCalc_43(height, weight) {
  const bmi = (weight / height ** 2).toFixed(1);
  return `BMI = ${bmi}, (h,w)=(${height},${weight})`;
}

result1.innerText = bmiCalc_43(h1, w1);
result2.innerText = bmiCalc_43(h2, w2);
result3.innerText = bmiCalc_43(h3, w3);
