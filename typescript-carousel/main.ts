let counter: number = 0;
const $img = document.querySelector('img');

const imgSRC: string[] = [
  './images/001.png',
  './images/004.png',
  './images/007.png',
  './images/025.png',
  './images/039.png',
];

function srcSwap(): void {
  if (!$img) throw new Error('$img does not exist!');
  if (counter < imgSRC.length) {
    $img.src = imgSRC[counter];
    counter += 1;
  } else counter = 0;
}

function srcSwapReverse(): void {
  if (!$img) throw new Error('$img does not exist!');
  if (counter > 0) {
    $img.src = imgSRC[counter];
    counter -= 1;
  } else counter = imgSRC.length - 1;
}

// moving through carousel with left/right arrows
const $leftArrow = document.querySelector('.fa-chevron-left');
const $rightArrow = document.querySelector('.fa-chevron-right');

$leftArrow?.addEventListener('click', srcSwapReverse);
$rightArrow?.addEventListener('click', srcSwap);
