<script>
let slides = document.querySelectorAll(".hero-slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 4000);
</script>
