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

document.querySelector(".prev").onclick = () => showSlide(slideIndex - 1);
document.querySelector(".next").onclick = () => showSlide(slideIndex + 1);

dots.forEach((dot, i) => {
  dot.onclick = () => showSlide(i);
});

setInterval(() => showSlide(slideIndex + 1), 5000);
showSlide(0);
