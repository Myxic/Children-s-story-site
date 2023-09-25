const burger = document.querySelector(".burger");
const closeBurger = document.querySelector("#closeBurger");
const navMenu = document.querySelector("header>div>nav");

burger.addEventListener("click", () => {
  navMenu.classList.add("burgerNav");
});

closeBurger.addEventListener("click", () => {
  navMenu.classList.remove("burgerNav");
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 800px)").matches) {
    
    navMenu.classList.remove("burgerNav");
  }
});
