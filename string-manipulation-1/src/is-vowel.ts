/* exported isVowel */

function isVowel(char: string): boolean {
  if (
    char === 'A' ||
    char === 'a' ||
    char === 'E' ||
    char === 'e' ||
    char === 'I' ||
    char === 'i' ||
    char === 'O' ||
    char === 'o' ||
    char === 'U' ||
    char === 'u'
  ) {
    return true;
  }
  return false;
}
