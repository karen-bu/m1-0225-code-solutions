'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const noNulls = [];
  for (const notNull of values)
    if (notNull != null) {
      noNulls.push(notNull);
    }
  return noNulls;
}
