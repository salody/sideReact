export default (text = API.PLATFORM_HOST) => {
  const element = document.createElement('div')

  element.className = 'autoplacement-example pure-button'
  element.innerHTML = text

  element.onclick = () => {
    import('./lazy')
      .then(lazy => {
        console.log(lazy)
        element.textContent = lazy.default
      })
      .catch(err => {
        console.log(err)
      })
  }

  return element
}
