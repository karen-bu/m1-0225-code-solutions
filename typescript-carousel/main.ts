const $img = document.querySelector('img');
const $carouselCounter = document.querySelectorAll('.fa-circle');

const imgSRC: string[] = [
  './images/001.png',
  './images/004.png',
  './images/007.png',
  './images/025.png',
  './images/039.png',
];

let index: number = 0;

function srcSwap(): void {
  if (!$img) throw new Error('$img does not exist!');
  if (!$carouselCounter) throw new Error('$carouselCounter does not exist!');

  $img.src = imgSRC[index];

  if (index < imgSRC.length - 1) {
    index += 1;
    $img.src = imgSRC[index];
    $carouselCounter[index - 1].classList.remove('fa-solid');
    $carouselCounter[index - 1].classList.add('fa-regular');
    $carouselCounter[index].classList.remove('fa-regular');
    $carouselCounter[index].classList.add('fa-solid');
  } else {
    index = 0;
    $img.src = imgSRC[0];
    $carouselCounter.forEach((counter) => counter.classList.remove('fa-solid'));
    $carouselCounter.forEach((counter) => counter.classList.add('fa-regular'));
    $carouselCounter[index].classList.add('fa-solid');
  }
}

function srcSwapReverse(): void {
  if (!$img) throw new Error('$img does not exist!');
  if (!$carouselCounter) throw new Error('$carouselCounter does not exist!');

  $img.src = imgSRC[index];
  if (index >= 1) {
    index -= 1;
    $img.src = imgSRC[index];
    $carouselCounter[index + 1].classList.remove('fa-solid');
    $carouselCounter[index + 1].classList.add('fa-regular');
    $carouselCounter[index].classList.remove('fa-regular');
    $carouselCounter[index].classList.add('fa-solid');
  } else {
    index = 4;
    $img.src = imgSRC[index];
    $carouselCounter.forEach((counter) => counter.classList.remove('fa-solid'));
    $carouselCounter.forEach((counter) => counter.classList.add('fa-regular'));
    $carouselCounter[index].classList.add('fa-solid');
  }
}

// autotimed image slideshow
setInterval(srcSwap, 3000);

// moving through carousel with left/right arrows
const $leftArrow = document.querySelector('.fa-chevron-left');
const $rightArrow = document.querySelector('.fa-chevron-right');

$leftArrow?.addEventListener('click', srcSwapReverse);
$rightArrow?.addEventListener('click', srcSwap);
