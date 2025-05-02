# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  The `&&` (logical AND) and `||` (logical OR) operators can be used to check truthiness and falsiness. Outside of `if` statements, you can use `&&` to check for truthiness and take action only if truty, and you can use `||` to for falsiness and take action only if falsy.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  "Short-circuiting" is when the evaluation of a second operand is skipped if the outcome can be determined by the first operand alone. In case of `&&` and `||` the second operand will not evaluate if the first operand before the `&&` is falsy and the first operand before the `||` is truthy.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The `??` (nullish coalescing) operator handles tasks where variables may be null or undefined. It differs from `||` which runs into pitfalls with evaluating 0 or ''.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  The `?:` (ternary) operator can be use for concise conditional expressions. It differs from `if/else` because it can accomplish what an `if/else` statement needing several lines of code can do in only one line of code.

- What is the `?.` (optional chaining) operator? When would you use it?
  The `?.` (optional chaining) operator acn be used to safely access properties on objects that may not exist, so you do not encounter undefined or null object properties. You might use it to check an optional property on a object, for example.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  `...` (spread) syntax is used to clone an array or an object and optionally add elements or properties. You can use it to capture the state of the array or object at the time you clone it, so you can change the original array or object without changing its clone.

- What data types can be spread into an array? Into an object?
  You can spread strings into an array. All primitives can be spread in objects.

- How does spread syntax differ from rest syntax?
  Spread syntax differs from rest syntax beacuse the spread operator should be the first element, and the rest operator should be the last element.
