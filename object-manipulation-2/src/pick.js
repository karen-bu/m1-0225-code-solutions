'use strict';
/* exported pick */
function pick(source, keys) {
  const pickObject = {};
  for (const key of keys) {
    if (source[key] !== undefined) {
      pickObject[key] = source[key];
    }
  }
  return pickObject;
}
