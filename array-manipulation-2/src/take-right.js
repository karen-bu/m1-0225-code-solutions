'use strict';
/* exported takeRight */
function takeRight(array, count) {
  const takeRightArray = [];
  for (let i = Math.max(0, array.length - count); i < array.length; i++)
    takeRightArray.push(array[i]);
  return takeRightArray;
}
