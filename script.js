//general variables
const inputDateMain = document.getElementById('date-reservation');
const inputDayMain = document.getElementById('day-reservation');
const inputGuestMain = document.querySelector('.guest-reservation');
const inputTimeMain = document.getElementById('time-reservation');
const inputDateResev = document.querySelector('.date-reservation');
const inputGuestResev = document.querySelector('.guest-reservation-2');
const inputTimeResev = document.querySelector('.time-reservation');
const dateSpanConfirm = document.querySelector('.date-span-confirm');
const guestSpanConfirm = document.querySelector('.dynamically-fetch-number-of-guests');
const timeSpanConfirm = document.querySelector('.time-span-confirm');
const countdownTimeContainer = document.querySelector('.dynamic-minutes-display');
const outOfTimeText = document.querySelector('.out-of-time-text');
const checkboxInput = document.querySelector('.checkbox-input');
const confirmBtn = document.getElementById('confirm-reservation-button');
const inputConfirmPage = document.querySelectorAll('.input-confirm-page');
const confirmAnimationPage = document.querySelector('.confirm-icon-container');


// nav buttons for navigation
const homeBtn = document.getElementById('home-btn-nav');
const visionBtn = document.getElementById('our-vision-btn-nav');
const menuBtn = document.getElementById('menu-btn-nav');
const reservationBtn = document.getElementById('reservation-btn-nav');
const contactBtn = document.getElementById('contact-btn-nav');
//pages
const homePage = document.getElementById('home-section');
const ourVisionPage = document.getElementById('our-vision-section');
const menuPage = document.getElementById('menu-section');
const reservationPage = document.getElementById('reservation-section');
const contactPage = document.getElementById('contact-section');
const confirmPage = document.getElementById('confirm-section');

// general buttons
const bookBtn = document.getElementById('reservation-button-resv-page');
const menuMainPageBtn = document.getElementById('menu-button-main-page');
const readMore1Btn = document.querySelector('.read-more-button-left');
const readMore2Btn = document.querySelector('.read-more-button-right');
const orderOnlnieBtn = document.querySelector('.order-online-button');
const scrollToTopBtn = document.querySelector('.scroll-to-top-button');
const reservationBtnMainPage = document.getElementById('reservation-button');
const changeDateBtn = document.getElementById('change-dates');
const confirmReservBtn = document.getElementById('confirm-reservation-button');

// images sliding on scroll
document.addEventListener('DOMContentLoaded', function () {
  var slideImages = document.querySelectorAll('.slide');
  var slideImages2 = document.querySelectorAll('.slide1');

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }

  var observer = new IntersectionObserver(handleIntersection, { threshold: 0.3 });

  slideImages.forEach(image => {
    observer.observe(image);
  });

  slideImages2.forEach(image => {
    observer.observe(image);
  });
});
//parallax on scroll
window.addEventListener('scroll', function() {
  const parallaxBackground = document.querySelector('.parallax-background');
  const parallaxBackground2 = document.querySelector('.parallax-reservation');
  const parallaxBackground3 = document.querySelector('.our-vision-background-parralax');
  const parallaxBackground4 = document.querySelector('.our-vision-background-parralax2');
  const parallaxBackground5 = document.querySelector('.parallax-background-menu');
  const parallaxBackground6 = document.querySelector('.contact-background-parralax');
  const scrollValue = window.scrollY;

  parallaxBackground.style.transform = `translate3d(0, -${scrollValue * 0.6}px, 0)`;
  parallaxBackground2.style.transform = `translate3d(0, -${scrollValue * 0.14}px, 0)`;
  parallaxBackground3.style.transform = `translate3d(0, -${scrollValue * 0.6}px, 0)`;
  parallaxBackground4.style.transform = `translate3d(0, -${scrollValue * 0.2}px, 0)`;
  parallaxBackground5.style.transform = `translate3d(0, -${scrollValue * 0.6}px, 0)`;
  parallaxBackground6.style.transform = `translate3d(0, -${scrollValue * 0.6}px, 0)`;

});
//get todays date
inputDateMain.value = new Date().toISOString().split('T')[0];
inputDateResev.value = new Date().toISOString().split('T')[0];
// Scroll to top
scrollToTopBtn.style.display = 'none';
window.onscroll = function() {
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 500) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};
scrollToTopBtn.addEventListener('click' , function(){
  window.scrollTo({ top: 0, behavior: 'smooth' });

});
//page swap
let pages = [homePage , ourVisionPage , menuPage , reservationPage ,confirmPage  , contactPage , menuPage , ourVisionPage , ourVisionPage , menuPage , confirmPage , reservationPage , homePage];
let buttons = [homeBtn , visionBtn , menuBtn , reservationBtn ,bookBtn  ,  contactBtn , menuMainPageBtn , readMore1Btn , readMore2Btn , orderOnlnieBtn , reservationBtnMainPage , changeDateBtn , confirmReservBtn];
let currentPage = pages[0];

buttons.forEach((button, index) => {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    if (currentPage !== pages[index]) {
      buttons.forEach(btn => btn.classList.remove('active-button'));
      button.classList.add('active-button');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      currentPage.classList.remove('active');
      pages[index].classList.add('active');
      currentPage = pages[index];
    }
    if (button === reservationBtnMainPage) {
      dateSpanConfirm.textContent = inputDateMain.value;
      timeSpanConfirm.textContent = inputTimeMain.value;
      guestSpanConfirm.textContent = `${inputGuestMain.value} people`;
      clearInterval(countdownInterval);
      countdownTime = 600;
      countdownInterval = setInterval(updateCountdown, 1000);
    }

    if (button === bookBtn ) {
      dateSpanConfirm.textContent = inputDateResev.value;
      timeSpanConfirm.textContent = inputTimeResev.value;
      guestSpanConfirm.textContent = `${inputGuestResev.value} people`;
      clearInterval(countdownInterval);
      countdownTime = 600;
      countdownInterval = setInterval(updateCountdown, 1000);
    }
  });
});
// countdown confirm page
let countdownTime = 600;
let countdownInterval;

function updateCountdown() {
  let minutes = Math.floor(countdownTime / 60);
  let seconds = countdownTime % 60;
  countdownTimeContainer.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  if (countdownTime <= 0) {
    clearInterval(countdownInterval);
    outOfTimeText.textContent = "Out of time , please start again from the Reservation Page."
    // Add any additional logic when the countdown reaches 0
  } else {
    countdownTime--;
  }

}
//cehckbox conditions
checkboxInput.addEventListener('click', function () {
  if (checkboxInput.checked && isAnyInputNotEmpty()) {
    confirmBtn.style.background = '#6c5b37';
    confirmBtn.style.color = 'white';
    confirmBtn.style.transition = 'all 0.5s';
    confirmBtn.disabled = false; // Enable the button
  } else {
    confirmBtn.style.background = '#E5E1DA';
    confirmBtn.style.color = 'darkgray';
    confirmBtn.disabled = true; // Disable the button
  }
});

// Event listener for input changes
function isAnyInputNotEmpty() {
  return Array.from(inputConfirmPage).some(input => input.value.trim() !== '');
}
inputConfirmPage.forEach(input => {
  input.addEventListener('input', function () {
    if (checkboxInput.checked && isAnyInputNotEmpty()) {
      confirmBtn.disabled = false; // Enable the button
    } else {
      confirmBtn.disabled = true; // Disable the button
    }
  });
});

// Event listener for confirmBtn click
confirmBtn.addEventListener('click', function () {
  confirmAnimationPage.style.display = 'flex';
  setTimeout(function () {
      confirmAnimationPage.style.display = 'none';
  }, 3000);
  // email handling code
  const formData = new FormData(document.querySelector('.reservation-form-confirm-page'));
  const formData2 = new FormData(document.querySelector('#reservationForm2'));
  
  // Merge formData2 into formData
  formData2.forEach((value, key) => {
      formData.append(key, value);
  });
  
  // Update the URL based on your environment
  fetch('sendEmail.php', {
      method: 'POST',
      body: formData,
  })
  .then(response => {
      if (response.ok) {
          console.log("Email sent successfully");
      } else {
          console.error("Error sending email:", response.status, response.statusText);
      }
  })
  .catch(error => {
      console.error('Error:', error);
  });
  console.log(formData);
  console.log(formData2);
});
