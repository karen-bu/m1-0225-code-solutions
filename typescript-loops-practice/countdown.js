'use strict';
/* exported countdown */
function countdown(num) {
  const countdownArray = [];
  for (let i = num; i >= 0; i--) {
    countdownArray.push(i);
  }
  return countdownArray;
}
