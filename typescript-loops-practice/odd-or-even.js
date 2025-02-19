'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  const parity = [];
  for (const number in numbers)
    if (numbers[number] % 2 === 0) {
      parity.push('even');
    } else {
      parity.push('odd');
    }
  return parity;
}
