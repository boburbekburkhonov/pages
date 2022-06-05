const elHeading = document.querySelector(".header");
const elHamburger = document.querySelector(".header__hamburger");

elHamburger.addEventListener("click", () => {
  elHeading.classList.toggle("header--open")
})
