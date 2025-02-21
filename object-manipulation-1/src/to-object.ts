/* exported toObject */

function toObject(keyValuePair: (string | any)[]): object {
  const newObject: object = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
