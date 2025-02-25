/* exported take */

function take(array: any[], count: number): number[] {
  const countArray: any[] = [];
  for (let i = 0; i < Math.min(count, array.length); i++) {
    countArray.push(array[i]);
  }
  return countArray;
}
