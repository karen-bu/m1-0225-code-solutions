/* exported getWords */

function getWords(string: string): string[] {
  if (string !== '') {
    const splitString = string.split(' ');
    return splitString;
  }
  return [];
}
