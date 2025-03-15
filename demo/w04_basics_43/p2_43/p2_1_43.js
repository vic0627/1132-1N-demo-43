import { sdata } from './data_43.js'
console.log('sdata', sdata)

const result1 = document.querySelector('.result1')
const result2 = document.querySelector('.result2')

const computePass = (data) => {
  const threshold = 60
  return data.filter((score) => score >= threshold).length
}

const computeFail = (data) => {
  const threshold = 60
  return data.filter((score) => score < threshold).length
}

const computeHighest = (data) => {
  return Math.max(...data)
}

const computeLowest = (data) => {
  return Math.min(...data)
}

const computeAverage = (data) => {
  const sum = data.reduce((acc, val) => acc + val, 0)
  return sum / data.length
}

const outputStat1 = (s) => {
  result1.innerHTML = `
    <h3 class="my-4">Array Statistics</h3>
    <p>sdata original:</p>
    <p>${JSON.stringify(s)}</p>
    <p>Total: ${s.length}</p>
    <p>Pass: ${computePass(s)}</p>
    <p>Fail: ${computeFail(s)}</p>
    <p>Highest: ${computeHighest(s)}</p>
    <p>Lowest: ${computeLowest(s)}</p>
    <p>Average: ${computeAverage(s).toFixed(1)}</p>
    `
}

outputStat1(sdata)
