const arrow = document.querySelector(".scroll-arrow-container");
const hero = document.querySelector(".hero-home-top");
const navbar = document.querySelector(".nav-regular");

let nav_height = navbar.offsetHeight;
let hero_height = hero.offsetHeight;
var scroll_height = hero_height-nav_height;

arrow.addEventListener("click", () => {
    document.documentElement.scrollTop = document.body.scrollTop = scroll_height;
});