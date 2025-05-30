function makeDropdown(elementContainer) {
  const button = elementContainer.querySelector('button')
  const menu = elementContainer.querySelector('ul')

  const toggleMenu = () => {
    menu.classList.toggle("visible")
  }

  button.addEventListener("click", toggleMenu)
}

export default makeDropdown