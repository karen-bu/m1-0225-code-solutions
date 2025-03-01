'use strict';
/* exported omit */
function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
function omit(source, keys) {
  const omitObject = {};
  for (const key in source) {
    if (!includes(keys, key)) {
      omitObject[key] = source[key];
    }
  }
  return omitObject;
}
