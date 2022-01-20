window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-times');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-times');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-times');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

const submit = document.querySelector('#submit');
const delay = ms => new Promise(res => setTimeout(res, ms));
const checkContainer = document.querySelector('.check-container');
const checkBackground = document.querySelector('.check-background');

const successMessage = async () => {
    document.getElementById('contact-form').style.display = 'none';

    // Show thank you message element
    checkContainer.style.display = 'flex';
    checkBackground.style.display = 'flex';

    await delay(3000);

    document.getElementById('contact-form').reset();

    document.getElementById('contact-form').style.display = 'grid';

    // Show thank you message element
    checkContainer.style.display = 'none';
    checkBackground.style.display = 'none';
  
  };

submit.addEventListener('click', successMessage);


// const close = document.querySelector('#close');

//   close.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.getElementById('success').style.display = 'none';

//     document.getElementById('contact-form').style.display = 'grid';

//   });
// const arrow = document.getElementById("down");
// const projects = document.getElementById("projects-title");
// const nav = document.getElementById("nav");

// arrow.addEventListener('click', () => {
//   let rect = projects.getBoundingClientRect();
//   let navHeight = nav.offsetHeight;
//   window.scrollTo({ behavior: "smooth", top: rect.top - navHeight });
// });

// const scrollUp = document.querySelector("#scroll-up");

// scrollUp.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// });

// const burger = document.querySelector("#burger-menu");
// const ul = document.querySelector("nav ul");

// burger.addEventListener("click", () => {
//   ul.classList.toggle("show");
// });

// const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach((link) =>
//   link.addEventListener("click", () => {
//     ul.classList.remove("show");
//   })
// );

// $(document).ready(function(){

//   var $sm = 480;
//   var $md = 768;

//   function resizeThis() {
//      $imgH = $('.middle img').width();
//      if ($(window).width() >= $sm) {
//         $('.left,.right,.section').css('height', $imgH);
//      } else {
//         $('.left,.right,.section').css('height', 'auto');
//      }
//   }

//   resizeThis();

//   $(window).resize(function(){
//      resizeThis();
//   });

//   $(window).scroll(function() {
//      $('.section').each(function(){
//         var $elementPos = $(this).offset().top;
//         var $scrollPos = $(window).scrollTop();

//         var $sectionH = $(this).height();
//         var $h = $(window).height();
//         var $sectionVert = (($h/2)-($sectionH/4));


//         if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
//            $(this).addClass('animate');
//         } else {
//            $(this).removeClass('animate');
//         }
//      });
//   });

//   $('.btn-primary').click(function(){
//      alert('I lied');
//   });
// });

// $(function() {
//  $('a[href*="#"]:not([href="#"])').click(function() {
//    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//      var target = $(this.hash);
//      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//      if (target.length) {
//        $('html, body').animate({
//          scrollTop: target.offset().top
//        }, 1000);
//        return false;
//      }
//    }
//  });
// });