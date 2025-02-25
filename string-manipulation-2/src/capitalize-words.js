'use strict';
/* exported capitalizeWords */
function capitalizeWords(string) {
  const splitLowerCased = string.toLowerCase().split(' ');
  const capitalizedArray = [];
  for (const word of splitLowerCased) {
    capitalizedArray.push(word[0].toUpperCase() + word.substring(1));
  }
  return capitalizedArray.join(' ');
}
