/* exported chunk */

function chunk(array: any[], size: number): any[][] {
  const chunkArray: any[][] = [];

  let startIndex = 0;

  while (startIndex < array.length) {
    const chunkOneArray: any[] = [];
    for (
      let i = startIndex;
      i < Math.min(size + startIndex, array.length);
      i++
    ) {
      chunkOneArray.push(array[i]);
    }
    chunkArray.push(chunkOneArray);
    startIndex += size;
  }

  return chunkArray;
}
