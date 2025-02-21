/* exported getKeys */

function getKeys(object: object): any[] {
  const keyArray: any[] = [];
  for (const keys in object) {
    keyArray.push(keys);
  }
  return keyArray;
}
