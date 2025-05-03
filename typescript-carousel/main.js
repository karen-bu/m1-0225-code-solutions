'use strict';
const $img = document.querySelector('img');
const $carouselDot = document.querySelectorAll('.fa-circle');
const $carouselDots = document.querySelector('.carousel-dots');
const imgSRC = [
  './images/001.png',
  './images/004.png',
  './images/007.png',
  './images/025.png',
  './images/039.png',
];
let index = 0;
function srcSwap() {
  if (!$img) throw new Error('$img does not exist!');
  if (!$carouselDot) throw new Error('$carouselCounter does not exist!');
  clearDots();
  $img.src = imgSRC[index];
  if (index < imgSRC.length - 1) {
    index += 1;
    $img.src = imgSRC[index];
    $carouselDot[index - 1].classList.remove('fa-solid');
    $carouselDot[index - 1].classList.add('fa-regular');
    $carouselDot[index].classList.remove('fa-regular');
    $carouselDot[index].classList.add('fa-solid');
  } else {
    index = 0;
    $img.src = imgSRC[0];
    $carouselDot.forEach((counter) => counter.classList.remove('fa-solid'));
    $carouselDot.forEach((counter) => counter.classList.add('fa-regular'));
    $carouselDot[index].classList.add('fa-solid');
  }
}
function srcSwapReverse() {
  if (!$img) throw new Error('$img does not exist!');
  if (!$carouselDot) throw new Error('$carouselCounter does not exist!');
  clearDots();
  $img.src = imgSRC[index];
  if (index >= 1) {
    index -= 1;
    $img.src = imgSRC[index];
    $carouselDot[index + 1].classList.remove('fa-solid');
    $carouselDot[index + 1].classList.add('fa-regular');
    $carouselDot[index].classList.remove('fa-regular');
    $carouselDot[index].classList.add('fa-solid');
  } else {
    index = 4;
    $img.src = imgSRC[index];
    $carouselDot.forEach((counter) => counter.classList.remove('fa-solid'));
    $carouselDot.forEach((counter) => counter.classList.add('fa-regular'));
    $carouselDot[index].classList.add('fa-solid');
  }
}
// moving through carousel with left/right arrows
const $leftArrow = document.querySelector('.fa-chevron-left');
const $rightArrow = document.querySelector('.fa-chevron-right');
$leftArrow?.addEventListener('click', srcSwapReverse);
$rightArrow?.addEventListener('click', srcSwap);
// moving through carousel by clicking dots
$carouselDots?.addEventListener('click', (event) => {
  if (!$img) throw new Error('$img does not exist!');
  if (!$carouselDot) throw new Error('$carouselCounter does not exist!');
  clearDots();
  const dotClicked = event.target;
  const dotID = Number(dotClicked?.dataset.id);
  if (event.target === null) {
    $img.src = imgSRC[index];
  } else {
    index = dotID;
    $img.src = imgSRC[dotID];
    $carouselDot.forEach((counter) => counter.classList.remove('fa-solid'));
    $carouselDot.forEach((counter) => counter.classList.add('fa-regular'));
    dotClicked.classList.add('fa-solid');
  }
});
// autotimed image slideshow
setInterval(srcSwap, 3000);
function clearDots() {
  $carouselDot.forEach((counter) => counter.classList.remove('fa-solid'));
  $carouselDot.forEach((counter) => counter.classList.add('fa-regular'));
}
