/* exported capitalize */

function capitalize(word: string): string {
  const firstLetter = word.slice(0, 1).toUpperCase();
  const restOfWord = word.slice(1, word.length).toLowerCase();
  const capitalized = firstLetter + restOfWord;
  return capitalized;
}
