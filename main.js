const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOptions,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOptions,
  delay: 500,
});

ScrollReveal().reveal(".swiper-container", {
  ...scrollRevealOptions,
});


ScrollReveal().reveal(".experience__content", {
  ...scrollRevealOptions,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOptions,
  interval: 500,
});

// price container
ScrollReveal().reveal(".price__card", {
  ...scrollRevealOptions,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickeable: true,
  },
});


var swiper1 = new Swiper('.swiper-container1', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: false,
});


document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.getElementById('openModalBtn');
  const modal = document.getElementById('opinionModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const formContainer = document.getElementById('formContainer');
  const successMessage = document.getElementById('successMessage');
  const closeSuccessBtn = document.getElementById('closeSuccessBtn');
  const opinionForm = document.getElementById('opinionForm');

  openModalBtn.addEventListener('click', () => {
      modal.style.display = 'block';
      formContainer.style.display = 'block';
      successMessage.style.display = 'none';
  });

  closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  closeSuccessBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });

  opinionForm.addEventListener('submit', (event) => {
      event.preventDefault();
      formContainer.style.display = 'none';
      successMessage.style.display = 'block';
  });
});