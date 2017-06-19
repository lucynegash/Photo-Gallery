var slide = 1;
showSlides(slide);

function changeSlides(n) {
  showSlides(slide += n);
}

function currentSlide(n) {
  showSlides(slide = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slide = 1
  } 
  if (n < 1) {slide = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slide-1].style.display = "block"; 
}