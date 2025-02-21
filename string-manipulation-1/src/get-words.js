'use strict';
/* exported getWords */
function getWords(string) {
  if (string !== '') {
    const splitString = string.split(' ');
    return splitString;
  }
  return [];
}
