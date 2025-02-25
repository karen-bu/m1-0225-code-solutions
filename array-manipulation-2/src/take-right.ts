/* exported takeRight */

function takeRight(array: any[], count: number): any[] {
  const takeRightArray: any[] = [];
  for (let i = Math.max(0, array.length - count); i < array.length; i++)
    takeRightArray.push(array[i]);
  return takeRightArray;
}
