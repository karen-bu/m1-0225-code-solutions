'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  const noStrings = [];
  for (const notString of values)
    if (typeof notString !== 'string') {
      noStrings.push(notString);
    }
  return noStrings;
}
