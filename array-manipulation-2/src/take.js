'use strict';
/* exported take */
function take(array, count) {
  const countArray = [];
  for (let i = 0; i < Math.min(count, array.length); i++) {
    countArray.push(array[i]);
  }
  return countArray;
}
