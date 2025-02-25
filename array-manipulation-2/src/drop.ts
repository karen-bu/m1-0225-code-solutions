/* exported drop */

function drop(array: any[], count: number): any[] {
  const droppedArray: any[] = [];
  for (let i = count; i < array.length; i++) {
    droppedArray.push(array[i]);
  }
  return droppedArray;
}
