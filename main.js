const arrow = document.getElementById("down");
const projects = document.getElementById("projects-title");
const nav = document.getElementById("nav");


arrow.addEventListener('click', () => {
  let rect = projects.getBoundingClientRect();
  let navHeight = nav.offsetHeight;
  window.scrollTo({ behavior: "smooth", top: rect.top - navHeight });
});


