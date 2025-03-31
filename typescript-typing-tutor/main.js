'use strict';
const $letter = document.querySelectorAll('.letter');
if (!$letter) throw new Error('$letter does not exist!');
// console.log($letter);
// for (let i = 0; i < $letter.length; i++) {
//   console.log($letter[i].textContent);
// }
document.addEventListener('keydown', (event) => {
  const keyPressed = event.key;
  console.log(event.key);
  let currentLetter = 0;
  if (keyPressed === $letter[currentLetter].textContent) {
    console.log('same hat!');
    $letter[currentLetter].className = 'letter correct';
    $letter[currentLetter + 1].className = 'letter target';
    currentLetter++;
  } else {
    console.log('wrong letter!');
    $letter[currentLetter].className = 'letter incorrect';
  }
});
