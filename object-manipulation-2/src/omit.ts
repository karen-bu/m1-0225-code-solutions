/* exported omit */

function includes(array: any[], value: any): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

function omit(
  source: Record<string, any>,
  keys: string[]
): Record<string, any> {
  const omitObject: Record<string, any> = {};

  for (const key in source) {
    if (!includes(keys, key)) {
      omitObject[key] = source[key];
    }
  }
  return omitObject;
}
