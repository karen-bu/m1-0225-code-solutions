/* exported dropRight */

function dropRight(array: any[], count: number): any[] {
  const dropRightArray: any[] = [];
  for (let i = 0; i < array.length - count; i++) {
    dropRightArray.push(array[i]);
  }
  return dropRightArray;
}
