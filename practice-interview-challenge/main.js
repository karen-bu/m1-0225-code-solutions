'use strict';
function getRangeReport(start, end) {
  const rangeObject = {};
  // range array
  const rangeArray = [];
  while (start <= end) {
    rangeArray.push(start++);
  }
  rangeObject.range = rangeArray;
  // total
  let totalSum = 0;
  for (let i = 0; i < rangeArray.length; i++) {
    totalSum += rangeArray[i];
  }
  rangeObject.total = totalSum;
  // average
  let avgSum = 0;
  for (let i = 0; i < rangeArray.length; i++) {
    avgSum += rangeArray[i];
  }
  const average = avgSum / rangeArray.length;
  rangeObject.average = average;
  // evens
  const evensArray = [];
  for (let i = 0; i < rangeArray.length; i++) {
    if (rangeArray[i] % 2 === 0) {
      evensArray.push(rangeArray[i]);
    }
  }
  rangeObject.evens = evensArray;
  // odds
  const oddsArray = [];
  for (let i = 0; i < rangeArray.length; i++) {
    if (rangeArray[i] % 2 !== 0) {
      oddsArray.push(rangeArray[i]);
    }
  }
  rangeObject.odds = oddsArray;
  return rangeObject;
}
