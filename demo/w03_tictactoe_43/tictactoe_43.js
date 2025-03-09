const o = 'o'
const x = 'x'
const tie = 'tie'
const ALL_STATES = [o, x, tie, 'disabled']
let turn = 0
let done = false

const $ = (e) => document.querySelector(e)
const $$ = (e) => [...document.querySelectorAll(e)]
const l = console.log

const container = $('.container')
const alertBox = $('.alert')
const board = $('.board')
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

const ggMessage = (p) => {
  if (!ALL_STATES.includes(p)) return
  const addClass = (e) => e.classList.add(p)
  p === tie || addClass(container)
  addClass(alertBox)
  alertBox.textContent = p === tie ? tie : `player ${p} wins`
}

const reset = () => {
  const removeClass = (e) => e.classList.remove(...ALL_STATES)
  removeClass(container)
  removeClass(alertBox)
  alertBox.textContent = ''
  allLi.forEach((node) => {
    removeClass(node)
    node.textContent = '+'
  })
  done = false
  turn = 0
}

resetBtn.addEventListener('click', reset)

const go = (e, p, txt) => {
  e.textContent = txt
  e.classList.add(p, 'disabled')
  if (checkWin(p)) {
    ggMessage(p)
    done = true
  }
}

board.addEventListener('click', ({ target: e }) => {
  if (!allLi.includes(e) || done) return
  if (e.classList.contains('disabled')) return alert('already filled')
  if (!(turn % 2)) go(e, o, o)
  else if (turn % 2) go (e, x ,x)
  if (!done && turn < 8) turn++
  else if (!done && turn >= 8) done = true, ggMessage(tie)
})