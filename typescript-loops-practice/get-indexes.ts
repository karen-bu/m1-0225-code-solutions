/* exported getIndexes */

function getIndexes(array: any[]): number[] {
  const indexArray: number[] = [];
  for (const value of array) indexArray.push(array.indexOf(value));
  return indexArray;
}
