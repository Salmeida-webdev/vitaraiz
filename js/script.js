// =========================================
// VITARAIZ NATURAIS - PREMIUM JS
// =========================================

const loader = document.querySelector(".loader-wrapper");
const header = document.querySelector("#header");
const menuToggle = document.querySelector("#menu-toggle");
const closeMenu = document.querySelector("#close-menu");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-nav a");
const faqItems = document.querySelectorAll(".faq-item");
const backToTop = document.querySelector("#backToTop");

// LOADER
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hide-loader");
  }, 700);
});

// HEADER SCROLL
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("scrolled");
    backToTop.classList.add("active");
  } else {
    header.classList.remove("scrolled");
    backToTop.classList.remove("active");
  }
});

// MOBILE MENU OPEN
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  document.body.style.overflow = "hidden";
});

// MOBILE MENU CLOSE
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "";
});

// CLOSE MENU ON LINK CLICK
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
});

// FAQ ACCORDION
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    faqItems.forEach((faq) => {
      faq.classList.remove("active");
      faq.querySelector(".faq-answer").style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// BACK TO TOP
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// SCROLL REVEAL
const revealElements = document.querySelectorAll(
  ".section-title, .hero-content, .hero-image, .benefit-card, .product-card, .ingredient-card, .about-image, .about-content, .testimonial-card, .faq-content, .faq-item, .cta-content",
);

const revealOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  revealOnScroll.observe(element);
});
