const $ = (e) => document.querySelector(e)
const l = console.log

const $lib = {
  userInput: $('.input-number'),
  addBtn: $('.btn-add'),
  subtractBtn: $('.btn-subtract'),
  multiplyBtn: $('.btn-multiply'),
  divideBtn: $('.btn-divide'),
  currentResultOutput: $('.current-result'),
  currentCalculationOutput: $('.current-calculation'),
}

const res = {
  default: 0,
  current: 0,
}

for (const k in $lib) l(k, $lib[k])

const getUserInput = () => +$lib.userInput.value

const createOperator = (cb) => () => {
  const op1 = res.current
  const op2 = getUserInput()
  const [result, process] = cb(op1, op2)
  const equation = `${process} = ${result}`
  $lib.currentResultOutput.textContent = res.current = result
  $lib.currentCalculationOutput.textContent = equation
  l(equation)
}

const eLib = {
  addBtn: (o1, o2) => [o1 + o2, `${o1} + ${o2}`],
  subtractBtn: (o1, o2) => [o1 - o2, `${o1} - ${o2}`],
  multiplyBtn: (o1, o2) => [(o1 * o2).toFixed(2), `${o1} * ${o2}`],
  divideBtn: (o1, o2) => (o2 ? [(o1 / o2).toFixed(2), `${o1} / ${o2}`] : [o1, 'cannot divide by 0']),
}

for (const k in eLib) $lib[k].addEventListener('click', createOperator(eLib[k]))
