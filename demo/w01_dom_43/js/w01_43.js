const $ = (e) => document.querySelector(e)
const l = console.log

const $lib = {
  userInput: $('.input-number'),
  addBtn: $('.btn-add'),
  currentResultOutput: $('.current-result'),
  currentCalculationOutput: $('.current-calculation'),
}

const res = {
  default: 0,
  current: 0,
}

for (const k in $lib) l(k, $lib[k])

const getUserInput = () => parseInt($lib.userInput.value)

const createOperator = (cb) => () => {
  const op1 = res.current
  const op2 = getUserInput()
  const [result, process] = cb(op1, op2)
  $lib.currentResultOutput.textContent = res.current = result
  $lib.currentCalculationOutput.textContent = process
  console.log('calText', process)
}

$lib.addBtn.addEventListener(
  'click',
  createOperator((o1, o2) => [o1 + o2, `${o1} + ${o2}`])
)
