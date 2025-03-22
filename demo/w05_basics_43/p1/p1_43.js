let c, f

c = Number(prompt('Enter the temperature in C:')).toFixed(2)
f = (c * 9.0) / 5 + 32
const output = `${c}°C is ${f}°F`
const result = document.querySelector('.result')
result.textContent = output
