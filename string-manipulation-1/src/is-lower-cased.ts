/* exported isLowerCased */

function isLowerCased(word: string): boolean {
  if (word.toLowerCase() === word) {
    return true;
  }
  return false;
}
