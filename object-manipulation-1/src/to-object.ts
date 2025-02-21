/* exported toObject */

function toObject(keyValuePair: (string | any)[]): object {
  const passedObject: object = {};
  passedObject[keyValuePair[0]] = keyValuePair[1];
  return passedObject;
}
