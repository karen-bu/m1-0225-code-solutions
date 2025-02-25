'use strict';
/* exported drop */
function drop(array, count) {
  const droppedArray = [];
  for (let i = count; i < array.length; i++) {
    droppedArray.push(array[i]);
  }
  return droppedArray;
}
