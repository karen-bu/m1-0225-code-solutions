'use strict';
/* exported chunk */
function chunk(array, size) {
  const chunkArray = [];
  let startIndex = 0;
  while (startIndex < array.length) {
    const chunkOneArray = [];
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
