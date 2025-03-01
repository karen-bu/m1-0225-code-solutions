/* exported defaults */

function getKeys(object: object): any[] {
  const keyArray: any[] = [];
  for (const keys in object) {
    keyArray.push(keys);
  }
  return keyArray;
}

function defaults(
  target: Record<string, any>,
  source: Record<string, any>
): void {
  const targetKeys: any[] = getKeys(target);

  for (const key in source) {
    if (!includes(targetKeys, key)) {
      target[key] = source[key];
    }
  }
}
