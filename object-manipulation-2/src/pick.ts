/* exported pick */

function pick(
  source: Record<string, any>,
  keys: string[]
): Record<string, any> {
  const pickObject: Record<string, any> = {};

  for (const key of keys) {
    if (source[key] !== undefined) {
      pickObject[key] = source[key];
    }
  }
  return pickObject;
}
