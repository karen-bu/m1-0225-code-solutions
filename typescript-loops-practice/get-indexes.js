'use strict';
/* exported getIndexes */
function getIndexes(array) {
  const indexArray = [];
  for (const value of array) indexArray.push(array.indexOf(value));
  return indexArray;
}
