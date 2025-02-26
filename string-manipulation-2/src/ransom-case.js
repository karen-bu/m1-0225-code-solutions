'use strict';
/* exported ransomCase */
function ransomCase(string) {
  let ransomCaseString = '';
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) ransomCaseString = ransomCaseString + string[i];
    else ransomCaseString += string[i].toUpperCase();
  }
  return ransomCaseString;
}
