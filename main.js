const projects = document.getElementsByClassName('project');
const languages = document.getElementsByClassName('language');
//show languages when hovering over a project
projects.addEventListener("mouseover", (e) => {
  languages.style.visibility = 'visible';
});
