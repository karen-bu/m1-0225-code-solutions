/* exported compact */

function compact(array: any[]): any[] {
  const compactArray: any[] = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] !== false &&
      array[i] !== null &&
      Number.isNaN(array[i]) !== true &&
      array[i] !== 0 &&
      array[i] !== undefined &&
      array[i] !== ''
    )
      compactArray.push(array[i]);
  }
  return compactArray;
}
