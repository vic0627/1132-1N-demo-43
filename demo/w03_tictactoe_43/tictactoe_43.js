const o = 'o'
const x = 'x'
const tie = 'tie'
const ALL_STATES = [o, x, tie]
let turn = 0
let done = false

const $ = (e) => document.querySelector(e)
const $$ = (e) => document.querySelectorAll(e)
const l = console.log

const container = $('.container')
const alert = $('.alert')
const allLi = $$('.board li')
const resetBtn = $('.reset')

const checkWin = (p) => {
  const board = []
  allLi.forEach(e => board.push(e.classList.contains(p)))
  console.log('board', board)
  const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = board
  if (
    (p1 && p2 && p3) ||
    (p4 && p5 && p6) ||
    (p7 && p8 && p9) ||
    (p1 && p4 && p7) ||
    (p2 && p5 && p8) ||
    (p3 && p6 && p9) ||
    (p1 && p5 && p9) ||
    (p3 && p5 && p7)
  ) return true
  return false
}

console.log('checkWin(o)', checkWin(o))
console.log('checkWin(x)', checkWin(x))

const ggMessage = (p) => {
  if (!ALL_STATES.includes(p)) return
  const addClass = (e) => e.classList.add(p)
  p === tie || addClass(container)
  addClass(alert)
  alert.textContent = p === tie ? tie : `player ${p} wins`
}

ggMessage(tie)

const reset = () => {
  const removeClass = (e) => e.classList.remove(...ALL_STATES)
  removeClass(container)
  removeClass(alert)
  alert.textContent = ''
  allLi.forEach((node) => {
    removeClass(node)
    node.textContent = '+'
  })
}

resetBtn.addEventListener('click', reset)
