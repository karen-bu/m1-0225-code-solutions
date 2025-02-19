/* exported includesSeven */

function includesSeven(array: unknown[]): boolean {
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
