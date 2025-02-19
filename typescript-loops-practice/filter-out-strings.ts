/* exported filterOutStrings */

function filterOutStrings(values: any[]): number[] {
  const noStrings: number[] = [];
  for (const notString of values)
    if (typeof notString !== 'string') {
      noStrings.push(notString);
    }
  return noStrings;
}
