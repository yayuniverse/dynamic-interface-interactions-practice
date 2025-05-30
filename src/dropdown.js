function makeDropdown(elementContainer) {
  const button = elementContainer.querySelector("button");
  const menu = elementContainer.querySelector("ul");

  const toggleMenu = () => {
    menu.classList.toggle("visible");
  };

  button.addEventListener("click", toggleMenu);

  // Add document click listener to close dropdown
  document.addEventListener("click", (e) => {
    if (
      menu.classList.contains("visible") &&
      !elementContainer.contains(e.target)
    ) {
      menu.classList.remove("visible");
    }
  });
}

export default makeDropdown;
