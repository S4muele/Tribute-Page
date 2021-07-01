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

const imgCaptionEl = document.getElementById("img-caption")
const imgEl = document.getElementById("image")
const preBtnEl = document.getElementById("carousel-button-prev")
const nextBtnEl = document.getElementById("carousel-button-next")

function addBoxShadow() {
    imgEl.classList.add("box-shadow")
}
function removeBoxShadow() {
    imgEl.classList.remove("box-shadow")
}

imgCaptionEl.addEventListener("mouseover", addBoxShadow)
imgCaptionEl.addEventListener("mouseout", removeBoxShadow)
preBtnEl.addEventListener("mouseover", addBoxShadow)
preBtnEl.addEventListener("mouseout", removeBoxShadow)
nextBtnEl.addEventListener("mouseover", addBoxShadow)
nextBtnEl.addEventListener("mouseout", removeBoxShadow)