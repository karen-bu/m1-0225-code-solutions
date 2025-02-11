# javascript-functions-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a function in JavaScript?
  A function in JavaScript is a block of code meant to return a value or perform some sort of operation.

- Describe the parts of a function **definition**.
  A function definition has:

  1. the `function` keyword in the beginning (unless it is an anonymous function, in which case the function will be a value assigned to a variable)
  2. an `optional` name (again unless it is anonymous in which case it will not have a name),
  3. a comma-separated list of zero or more `parameters` enclosed by parentheses `()`
  4. opening and closing curly brackets `{}` around the code block
  5. an optional `return` statement

- Describe the parts of a function **call**.
  A function call has:

  1. the name of the function being called
  2. the argument(s) the function is called with placed inside parentheses `()` if they exist

- When comparing them side-by-side, what are the differences between a function **call** and a function **definition**?
  A function call will have arguments instead of parameters

- What is the difference between a **parameter** and an **argument**?
  The parameter helps to define how a function works, the argument is the actual value to be run within the function. The parameter is a "fake placeholder" but the argument is "real".

- Why are function **parameters** useful?
  Function parameters are useful to help build your function without needing to actually run it.

- What two effects does a `return` statement have on the behavior of a function?
  A `return` statement will cause the function to produce a value, and prevent any more code in the code block from being run

- What is the syntax for defining an arrow function?
  An arrow function is similar to an anonymous function in that it needs to be assigned to a variable. The syntax is to declare the variable, put the parameters (if any) between parentheses `()`, then the arrow `=>`, then curly brackets `{}` surrounding the function code block.

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  It is an 'implicit return' function means it returns a value without using the `return` keyword
