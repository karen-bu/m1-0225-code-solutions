/* exported invert */

function invert(source: Record<string, any>): object {
  const invertedObject: Record<string, any> = {};
  let newKey;
  let newValue;

  for (const key in source) {
    newKey = source[key];
    newValue = key;
    invertedObject[newKey] = newValue;
  }

  return invertedObject;
}
