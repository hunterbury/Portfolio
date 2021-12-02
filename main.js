const arrow = document.getElementById("down");
const projects = document.getElementById("projects-title");
const nav = document.getElementById("nav");

arrow.addEventListener('click', () => {
  let rect = projects.getBoundingClientRect();
  let navHeight = nav.offsetHeight;
  window.scrollTo({ behavior: "smooth", top: rect.top - navHeight });
});

const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);