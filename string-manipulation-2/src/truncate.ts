/* exported truncate */

function truncate(length: number, string: string): string {
  const truncated = string.slice(0, length) + '...';
  return truncated;
}
