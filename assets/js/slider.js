const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;
let interval = null;
const transitionDuration = 2000;

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function showSlide(idx) {
  index = (idx + images.length) % images.length;
  slides.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

function startAutoSlide() {
  interval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

function disableButtonsTemporarily() {
  nextBtn.disabled = true;
  prevBtn.disabled = true;
  setTimeout(() => {
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }, transitionDuration);
}

// startAutoSlide();

// ROOMS SCROLL
const slider = document.getElementById("rooms-container");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;

  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".secondNavbar");
  const reservation = document.querySelector(".reservation");
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 400) {
      navbar.style.opacity = "1";
      navbar.style.visibility = "visible";
      reservation.style.visibility = "hidden";
    } else {
      navbar.style.opacity = "0";
      navbar.style.visibility = "hidden";
      reservation.style.visibility = "visible";
    }
  });
});
