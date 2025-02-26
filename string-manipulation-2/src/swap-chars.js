'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const firstExtract = string.slice(firstIndex, firstIndex + 1);
  const secondExtract = string.slice(secondIndex, secondIndex + 1);
  const stringBeginning = string.substring(0, firstIndex);
  const stringFirst = string.substring(firstIndex + 1, secondIndex);
  const stringSecond = string.substring(secondIndex + 1, string.length);
  return (
    stringBeginning + secondExtract + stringFirst + firstExtract + stringSecond
  );
}
