import { students } from './data.js'

let state = {
  pass: 0,
  fail: 0,
  sum: 0,
  average: 0,
  highest: -100,
  lowest: 200,
}

const result1 = document.querySelector('.result1')
const result2 = document.querySelector('.result2')

const resetState = () => {
  state = {
    pass: 0,
    fail: 0,
    sum: 0,
    average: 0,
    highest: -100,
    lowest: 200,
  }
}

console.log('students', students)

const computeStat = (s) => {
  resetState()
  s.forEach((item) => {
    if (item.score >= 59.5) state.pass++
    else state.fail++
    state.sum += item.score
    state.average = state.sum / s.length
  })
}

const computeHeightest = (s) => {
  s.forEach((item) => {
    if (item.score > state.highest) state.highest = item.score
  })
  return state.highest
}

const computeLowest = (s) => {
  s.forEach((item) => {
    if (item.score < state.lowest) state.lowest = item.score
  })
  return state.lowest
}

const outputStat = (s, isSort, result) => {
  const resultText = `
        <h3 class="my-4">Array Staticistics for ${result}</h3>
        <p>After sorting descending:</p>
        <p>${JSON.stringify(s)}</p>
        <p>Total: ${s.length}</p>
        <p>Pass: ${state.pass}</p>
        <p>Fail: ${state.fail}</p>
        <p>Heightest: ${isSort ? s[0].score : computeHeightest(s)}</p>
        <p>Lowest: ${isSort ? s[s.length - 1].score : computeLowest(s)}</p>
        <p>Average: ${state.average.toFixed(1)}</p>
    `
  if (result === 'result1') result1.innerHTML = resultText
  else result2.innerHTML = resultText
}

computeStat(students)
outputStat(students, false, 'result1')

const toSorted = students.toSorted((a, b) => b.score - a.score)

console.log('after sorting: ', students)
console.log('toSorted', toSorted)

computeStat(students)
outputStat(toSorted, true, 'result2')
