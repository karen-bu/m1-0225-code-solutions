'use strict';
/* exported invert */
function invert(source) {
  const invertedObject = {};
  let newKey;
  let newValue;
  for (const key in source) {
    newKey = source[key];
    newValue = key;
    invertedObject[newKey] = newValue;
  }
  return invertedObject;
}
