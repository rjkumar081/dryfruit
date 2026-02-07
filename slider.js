let index = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  index++;
  if (index > slides.length) { index = 1 }

  slides[index - 1].style.display = "block";

  setTimeout(showSlides, 4000); // 4 sec
}
