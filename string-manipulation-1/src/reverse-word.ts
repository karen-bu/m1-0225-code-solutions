/* exported reverseWord */

function reverseWord(word: string): string {
  let reversed = '';
  for (const character of word) reversed = character + reversed;
  return reversed;
}
