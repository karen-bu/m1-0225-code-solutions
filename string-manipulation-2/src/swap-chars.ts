/* exported swapChars */

function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  const stringBeginning = string.substring(0, firstIndex);
  const firstExtract = string.slice(firstIndex, firstIndex + 1);
  const stringFirst = string.substring(firstIndex + 1, secondIndex);
  const secondExtract = string.slice(secondIndex, secondIndex + 1);
  const stringSecond = string.substring(secondIndex + 1, string.length);
  return (
    stringBeginning + secondExtract + stringFirst + firstExtract + stringSecond
  );
}
