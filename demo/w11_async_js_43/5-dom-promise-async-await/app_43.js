const heading1 = document.querySelector('.one')
const heading2 = document.querySelector('.two')
const heading3 = document.querySelector('.three')
const heading4 = document.querySelector('.four')

const btn = document.querySelector('.btn')

const addColor = (t, e, color) => {
  return new Promise((resolve, reject) => {
    if (e) {
      setTimeout(() => {
        e.style.color = color
        resolve()
      }, t)
    } else {
      reject(new Error(`there is no such element ${e}`))
    }
  })
}

const displayColor = async () => {
  try {
    await addColor(1000, heading1, 'red')
    await addColor(2000, heading2, 'green')
    await addColor(1000, heading3, 'blue')
    await addColor(500, heading4, 'purple')
  } catch (error) {
    console.error(error)
  }
}

btn.addEventListener('click', async () => {
  const result = await displayColor()
  console.log('result', result)
})
