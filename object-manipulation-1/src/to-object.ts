/* exported toObject */

function toObject(keyValuePair: (string | any)[]): object {
  const object: object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
