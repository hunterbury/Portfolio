//trigger tooltip
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//close nav when link is clicked
const scrollTriggerList = [].slice.call(document.querySelectorAll('.scroll-trigger'));
scrollTriggerList.map(scrollTrigger => {
    scrollTrigger.addEventListener('click', () => {
      toggle.click();
    })
});

//project image slide-in
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
        let val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

function debounce(func, wait = 20, immediate = true) {
	let timeout;
	return function() {
	  let context = this, args = arguments;
	  let later = function() {
		timeout = null;
		if (!immediate) func.apply(context, args);
	  };
	  let callNow = immediate && !timeout;
	  clearTimeout(timeout);
	  timeout = setTimeout(later, wait);
	  if (callNow) func.apply(context, args);
	};
};

const sliderImages = document.querySelectorAll('.slide-in', );
function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
	const slideInAt = (window.scrollY + window.innerHeight + 10) - sliderImage.height / 2;
	const imageBottom = sliderImage.offsetTop + sliderImage.height;
	const isHalfShown = slideInAt > sliderImage.offsetTop;
	const isNotScrolledPast = window.scrollY < imageBottom;
	if(isHalfShown && isNotScrolledPast) {
	  sliderImage.classList.add('active');
	} else {
	  sliderImage.classList.remove('active');

	}
  });
}

window.addEventListener('scroll', debounce(checkSlide));

//contact form submission confirmation
const submit = document.querySelector('#submit');
const delay = ms => new Promise(res => setTimeout(res, ms));
const checkContainer = document.querySelector('.check-container');
const checkBackground = document.querySelector('.check-background');

const successMessage = async () => {
    document.getElementById('contact-form').style.display = 'none';

    checkContainer.style.display = 'flex';
    checkBackground.style.display = 'flex';

    await delay(3000);

    document.getElementById('contact-form').reset();

    document.getElementById('contact-form').style.display = 'grid';

    checkContainer.style.display = 'none';
    checkBackground.style.display = 'none';
  
  };

submit.addEventListener('click', successMessage);

const modals = document.getElementsByClassName("modal");
const btns = document.getElementsByClassName("modalBtn");
const spans = document.getElementsByClassName("close");

[...btns].forEach((btn, ind) => {
  btn.onclick = () => (modals[ind].style.display = 'block');
});

[...spans].forEach((span, ind) => {
  span.onclick = () => (modals[ind].style.display = 'none');
});

window.onclick = (e) => {
  [...modals].forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}; 

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// //for loop  to map modal btn to modal for each project
// const modalBtns = document.getElementsByClassName('modalBtn');
// for (let i = 0; i < modalBtns.length; i++) {
//   modalbtns[i]
// }
//or use .slice.call and then map like function above

