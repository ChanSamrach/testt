
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

//   swiper

// Aos animation
AOS.init({
    duration: 2000,
});


// Function to animate a counter
// function animateCounter(element, start, end, duration) {
//   let current = start;
//   const range = end - start;
//   const increment = end > start ? 1 : -1;
//   const stepTime = Math.abs(Math.floor(duration / range));
//   const obj = element;

//   const timer = setInterval(() => {
//     current += increment;
//     obj.textContent = current;

//     if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
//       clearInterval(timer);
//     }
//   }, stepTime);
// }

// window.addEventListener('load', () => {
//   // Get all elements with the class 'purecounter'
//   const counters = document.querySelectorAll('.purecounter');

//   counters.forEach(counter => {
//     const start = parseInt(counter.getAttribute('data-purecounter-start'));
//     const end = parseInt(counter.getAttribute('data-purecounter-end'));
//     const duration = 1000; // Set a fixed duration of 1000 milliseconds (1 second)

//     // Animate the counter
//     animateCounter(counter, start, end, duration);
//   });
// });
function animateCounter(element, start, end, duration) {
  let current = start;
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const obj = element;

  const timer = setInterval(() => {
    current += increment;
    obj.textContent = current;

    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      clearInterval(timer);
    }
  }, stepTime);
}

window.addEventListener('load', () => {
  // Get all elements with the class 'purecounter'
  const counters = document.querySelectorAll('.purecounter');

  counters.forEach(counter => {
    const start = 0; // Adjust the initial value as needed
    const end = parseInt(counter.getAttribute('data-purecounter-end'));
    const duration = 1000; // Set a fixed duration of 1000 milliseconds (1 second)

    // Animate the counter
    animateCounter(counter, start, end, duration);
  });
});

// Aos animation