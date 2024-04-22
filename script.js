const body = document.querySelector("body");
const header = document.querySelector("header")
const menuMovil = document.querySelector("nav");
const moon = document.querySelector(".btn__dark");
const sun = document.querySelector(".btn__light");


const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelectorAll(".navLink");

hamburger.addEventListener("click", () => {
  menuMovil.classList.toggle("active")
  hamburger.classList.toggle("active");
});

navLink.forEach(function (navLink) {
  navLink.addEventListener("click", () => {
    menuMovil.classList.toggle("active")
    hamburger.classList.toggle("active");
    navLink.classList.toggle("active")
  })
})


moon.addEventListener("click", () => {
  body.classList.toggle("darkMode");
  header.classList.toggle("darkMode")
  sun.style.display = "block";
  moon.style.display = "none"
})

sun.addEventListener("click", () => {
  body.classList.toggle("darkMode")
  header.classList.toggle("darkMode")
  moon.style.display = "block"
  sun.style.display = "none"
})