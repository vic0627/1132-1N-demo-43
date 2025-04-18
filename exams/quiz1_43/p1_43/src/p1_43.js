function h(e, t) {
  document.querySelector(e).textContent = `${t}°C = ${(t * 9) / 5 + 32}°F`
}

h('.result1', 19)
h('.result2', 28)
