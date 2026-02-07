let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.classList.remove("active"));

  slideIndex = (n + slides.length) % slides.length;

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

/* Arrows */
document.querySelector(".prev").addEventListener("click", () => {
  showSlide(slideIndex - 1);
});
document.querySelector(".next").addEventListener("click", () => {
  showSlide(slideIndex + 1);
});

/* Dots */
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

/* Auto play */
setInterval(() => {
  showSlide(slideIndex + 1);
}, 5000);

/* Init */
showSlide(0);
