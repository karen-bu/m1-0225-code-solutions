# typescript-destructuring-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is destructuring, conceptually?
  Destructuring is the process of being able to easily unpack properties from objects, or elements from arrays, into individual variables without needing several lines of code.

- What is the syntax for `Object` destructuring?
  The syntax for object destructuring is to declare a variable, use curly brackets, and name the property(ies) you want to separate into a variable, and set the value equal to the object with the same property key names. ex: `const { firstName, lastName } = person` would make a variable `firstName` with the value of `person.firstName` and a variable `lastName` with the value of `person.lastName`.

- What is the syntax for `Array` destructuring?
  The syntax for object destructuring is to declare a variable, use square brackets, and name the variables you want to assign the array elements to, and set the value equal to the array to destructure. ex: `const [x , y, z ] = number` would make variables `x, y, z` with the value of `number[0], number[1], number[2]` respectively.

- How can you tell the difference between destructuring and creating `Object`/`Array` literals?
  You can tell the difference between destructuring and creating `Object`/`Array` literals by the type of brackets used in the syntax. Destructuring `Object` literals uses the curly bracketes `{}` while destructuring `Array` literals uses the square brackets `[]`.
