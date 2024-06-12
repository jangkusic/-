document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "images/자전거 사진 1.png",
    "images/자전거 사진 2.png",
    "images/자전거 사진 3.png",
  ];
  const slideContainer = document.getElementById("slide-container");
  const dotsContainer = document.getElementById("dots-container");

  images.forEach((image, index) => {
    const slide = document.createElement("img");
    slide.src = image;
    slide.className = "slide";
    if (index === 0) slide.style.display = "block";
    slideContainer.insertBefore(slide, slideContainer.children[0]);

    const dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = function () {
      currentSlide(index + 1);
    };
    dotsContainer.appendChild(dot);
  });

  showSlides(slideIndex);
});

let slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
