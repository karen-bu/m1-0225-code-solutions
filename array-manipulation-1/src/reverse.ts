/* exported reverse */

function reverse(array: any[]): any[] {
  const reverseArray: any[] = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}
