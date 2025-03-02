'use strict';
/* exported defaults */
function getKeys(object) {
  const keyArray = [];
  for (const keys in object) {
    keyArray.push(keys);
  }
  return keyArray;
}
function defaults(target, source) {
  const targetKeys = getKeys(target);
  for (const key in source) {
    if (!includes(targetKeys, key)) {
      target[key] = source[key];
    }
  }
}
