let slides = document.getElementsByClassName("carousel-item")
let totalSlides = slides.length
let currentSlide = 0

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}

function prevSlide() {
  hideAllSlides()
  
  if (currentSlide === 0) {
    currentSlide = totalSlides - 1
  } else {
    currentSlide--
  } 
  slides[currentSlide].classList.add("carousel-item-visible")
}

function nextSlide() {
  hideAllSlides()
  
  if (currentSlide === totalSlides - 1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  slides[currentSlide].classList.add("carousel-item-visible")
}

document.getElementById("carousel-button-prev").addEventListener("click", prevSlide)
document.getElementById("carousel-button-next").addEventListener("click", nextSlide)