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

$(document).ready(function(){

  var $sm = 480;
  var $md = 768;

  function resizeThis() {
     $imgH = $('.middle img').width();
     if ($(window).width() >= $sm) {
        $('.left,.right,.section').css('height', $imgH);
     } else {
        $('.left,.right,.section').css('height', 'auto');
     }
  }

  resizeThis();

  $(window).resize(function(){
     resizeThis();
  });

  $(window).scroll(function() {
     $('.section').each(function(){
        var $elementPos = $(this).offset().top;
        var $scrollPos = $(window).scrollTop();

        var $sectionH = $(this).height();
        var $h = $(window).height();
        var $sectionVert = (($h/2)-($sectionH/4));


        if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
           $(this).addClass('animate');
        } else {
           $(this).removeClass('animate');
        }
     });
  });

  $('.btn-primary').click(function(){
     alert('I lied');
  });
});

$(function() {
 $('a[href*="#"]:not([href="#"])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
       $('html, body').animate({
         scrollTop: target.offset().top
       }, 1000);
       return false;
     }
   }
 });
});