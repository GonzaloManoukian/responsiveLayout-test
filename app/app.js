//  Abrir Hamburger Menu

const botonHamburger = document.querySelector("#hamburgerButton");
const menuMobile = document.querySelector("#nav");

botonHamburger.addEventListener("click", function (e) {
  e.preventDefault();
  botonHamburger.classList.toggle("open");
  menuMobile.classList.toggle("navOpen");
});

menuMobile.addEventListener("click", function () {
  botonHamburger.classList.remove("open");
  menuMobile.classList.remove("navOpen");
});
