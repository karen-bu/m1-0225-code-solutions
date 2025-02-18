/* exported tail */

function tail(array: any[]): any[] {
  const tailArray: any[] = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
}
