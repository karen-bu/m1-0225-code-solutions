/* exported filterOutNulls */

function filterOutNulls(values: number[]): number[] {
  const noNulls: number[] = [];
  for (const notNull of values)
    if (notNull != null) {
      noNulls.push(notNull);
    }
  return noNulls;
}
