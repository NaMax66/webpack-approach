/*
async function init() {
  const { default: createHeader } = await import('./utils/createHeader')
  const { default: fillHeader }  = await import('./utils/fillElement')

  const header = createHeader()
  fillHeader(header)

  document.body.appendChild(header)
}

init()
*/

const createHeaderPromise = import('./utils/createHeader')
const fillElementPromise = import('./utils/fillElement')

Promise.all([createHeaderPromise, fillElementPromise])
  .then(([
    { default: createHeader },
    { default: fillHeader }]) => {
      const header = createHeader()
      fillHeader(header)

      document.body.appendChild(header)
})

alert(process.env.NODE_ENV)
