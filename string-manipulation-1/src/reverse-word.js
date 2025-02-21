'use strict';
/* exported reverseWord */
function reverseWord(word) {
  let reversed = '';
  for (const character of word) reversed = character + reversed;
  return reversed;
}
