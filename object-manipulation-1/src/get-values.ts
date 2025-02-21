/* exported getValues */

function getValues(object: object): any[] {
  const valueArray: any[] = [];
  for (const values in object) {
    valueArray.push(object[values]);
  }
  return valueArray;
}
