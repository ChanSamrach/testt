// swiper
new Swiper('.testimonials-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    1200: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});

// Aos animation
AOS.init({
  duration: 2000,
});

window.addEventListener('load', () => {
  // Get all elements with the class 'purecounter'
  const counters = document.querySelectorAll('.purecounter');

  counters.forEach(counter => {
    const start = 0; // Adjust the initial value as needed
    const end = parseInt(counter.getAttribute('data-purecounter-end'));
    const duration = 2; // Set a fixed duration of 1000 milliseconds (1 second)

    // Animate the counter
    animateCounter(counter, start, end, duration);
  });
});

// preloading
var loader = document.getElementById("preloading");

// Set a duration in milliseconds (e.g., 2000 milliseconds = 2 seconds)
var duration = 250;

// Use setTimeout to delay hiding the loader
setTimeout(function () {
  loader.style.display = "none";
}, duration);


// JavaScript to show and hide the button
window.onscroll = function () {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
};

//  Tabs in Course
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}