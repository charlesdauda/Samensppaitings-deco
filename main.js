'use strict';

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navLinks = document.querySelectorAll("[data-navbar-link]");

navToggleBtn.addEventListener("click", function () {
    this.classList.toggle('active');
  header.classList.toggle("nav-active");
});

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
      header.classList.toggle("nav-active");
      navToggleBtn.classList.toggle('active');
    });
  }

  window.addEventListener("scroll", function(){
    if(this.window.scrollY >= 100){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
  });

 window.addEventListener("load", () => {
    const sr = ScrollReveal({
      reset: false,
      distance: '60px',
      duration: 1000,
      delay: 200
    });

    sr.reveal('.hero-banner', { origin: 'left' });
    sr.reveal('.hero-content', { origin: 'right', delay: 300 });

    sr.reveal('.features-card', { origin: 'bottom', interval: 200 });

    sr.reveal('.service-banner', { origin: 'left' });
    sr.reveal('.service-content', { origin: 'right', interval: 200 });

    sr.reveal('.blog-card', { origin: 'bottom', interval: 200 });

    sr.reveal('.newsletter-banner', { origin: 'left' });
    sr.reveal('.newsletter-content', { origin: 'right' });

    sr.reveal('.footer-brand', { origin: 'left' });
    sr.reveal('.quicklink-box', { origin: 'bottom', delay: 200 });
    sr.reveal('.contact', { origin: 'right', delay: 300 });
  });