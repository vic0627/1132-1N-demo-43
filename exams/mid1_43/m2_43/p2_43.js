const calculateBtn = document.querySelector('.calculate');
const bmiResult = document.querySelector('.show-result');

const suggest = document.querySelector('.give-suggestion');

function bmiCalc_43(height, weight) {
  return (weight / height ** 2).toFixed(1);
}

function bmi_normal_low(height) {
  return (18.5 * height ** 2).toFixed(1);
}

function bmi_normal_high(height) {
  return (24 * height ** 2).toFixed(1);
}

function calculateBMI() {
  const weight = parseFloat(document.querySelector('.weight').value);
  const height = parseFloat(document.querySelector('.height').value) / 100;

  const bmi = bmiCalc_43(height, weight);
  const normal_low = bmi_normal_low(height);
  const normal_high = bmi_normal_high(height);

  let status;
  let suggestion;

  if (bmi < 18.5) {
    status = 'Underweight';
    suggestion = `Gain al least ${(normal_low - weight).toFixed(
      1
    )}kg to normal.`;
  } else if (bmi <= 24) {
    status = 'Normal';
    suggestion = '';
  } else {
    status = 'Overweight';
    suggestion = `Reduce at least ${(weight - normal_high).toFixed(
      1
    )}kg to normal.`;
  }

  bmiResult.innerHTML = `Your BNI is ${bmi}. ${status}.`;
  suggest.innerHTML = suggestion;
}

calculateBtn.addEventListener('click', calculateBMI);
