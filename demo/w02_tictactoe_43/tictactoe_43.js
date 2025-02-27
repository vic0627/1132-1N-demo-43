const o = 'o'
const x = 'x'
let turn = 0
let done = false

const $ = (e) => document.querySelector(e)
const $$ = (e) => document.querySelectorAll(e)
const l = console.log

const container = $('.container')
const alert = $('.alert')
const allLi = $$('.board li')
const resetBtn = $('.reset')

const ggMessage = (p) => {
  const isTie = p !== o && p !== x
  isTie || container.classList.add(p)
  alert.classList.add(isTie ? 'tie' : p)
  alert.textContent = isTie ? 'tie' : `player ${p} wins`
}

ggMessage()
