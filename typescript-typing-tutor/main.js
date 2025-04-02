'use strict';
const $letter = document.querySelectorAll('.letter');
if (!$letter) throw new Error('$letter does not exist!');
const $modal = document.querySelector('dialog');
if (!$modal) throw new Error('$modal does not exist!');
const $accuracy = document.querySelector('.accuracy');
if (!$accuracy) throw new Error('$accuracy does not exist!');
let currentLetter = 0;
let wrongLetters = 0;
let totalLetters = 0;
let gameOver = false;
document.addEventListener('keydown', (event) => {
  const keyPressed = event.key;
  console.log(event.key);
  if (gameOver === true) {
    return;
  }
  if (keyPressed === $letter[currentLetter].textContent) {
    console.log('right letter!');
    $letter[currentLetter].className = 'letter correct';
    if (currentLetter >= 35) {
      gameOver = true;
      const accuracy = (
        ((totalLetters - wrongLetters) / totalLetters) *
        100
      ).toFixed(2);
      $accuracy.textContent = accuracy.toString() + '%';
      $modal.showModal();
      return;
    }
    $letter[currentLetter + 1].className = 'letter target';
    currentLetter++;
  } else {
    console.log('wrong letter!');
    $letter[currentLetter].className = 'letter incorrect target';
    wrongLetters++;
  }
  totalLetters++;
});
