# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:

  - What does `Array.forEach` do?
    `Array.forEach` executes a function once for each array element.
  - What should the callback function do?
    The callback function should take the current element in the array, and optionally the index of the current element being processed, and the array that the callback function is being applied to.
  - What is `Array.forEach` useful for?
    `Array.forEach` is helpful to execute side effects at the end of a chain

- `Array.map`:

  - What does `Array.map` do?
    `Array.map` creates a new array populated with results of calling a function on every element in the calling array.
  - What should the callback function return?
    The callback function should return a value to add to the new array.
  - What is `Array.map` useful for?
    `Array.map` is useful for bulk-applying a function without needing to worry about modifying the original array.

- `Array.find`:

  - What does `Array.find` do?
    `Array.find` returns the value of the first element in the array that satisfies the testing function, or else returns `undefined`.
  - What should the callback function return?
    The callback function should return `true` when the satisfying element is found.
  - What is `Array.find` useful for?
    `Array.find` is useful for searching an array for a specific value.

- `Array.filter`:
  - What does `Array.filter` do?
    `Array.filter` creates a new array with all elements that pass a test implemented by a provided function.
  - What should the callback function return?
    The callback function should return a boolean: `true` to keep the element, or `false` to reject the element.
  - What is `Array.filter` useful for?
    `Array.filter` is useful for selectively filtering elements out of an array.
