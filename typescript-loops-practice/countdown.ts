/* exported countdown */

function countdown(num: number): number[] {
  const countdownArray: number[] = [];
  for (let i = num; i >= 0; i--) {
    countdownArray.push(i);
  }
  return countdownArray;
}
