'use strict';
/* exported getValues */
function getValues(object) {
  const valueArray = [];
  for (const values in object) {
    valueArray.push(object[values]);
  }
  return valueArray;
}
