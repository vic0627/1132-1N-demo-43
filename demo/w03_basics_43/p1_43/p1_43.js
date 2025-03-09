// Output: 20.00 C = 68.00F

const $ = e => document.querySelector(e)
const l = console.log
let c, f

c = Number(prompt('Enter a temperature in c: ')).toFixed(2)
l('c', c)
f = (c * 9) / 5 + 32
const output = `${c} C = ${f} F`
$('.result').innerText = output