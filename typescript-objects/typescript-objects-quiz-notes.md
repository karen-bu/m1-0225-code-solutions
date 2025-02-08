# typescript-objects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are objects used for?
  Objects are used to group and organize related data and functions together.

- What are object properties?
  Properties are different characteristics of an object, each with its own value.

- Describe object literal notation.
  Object literal notation starts with `const` and the name of the object, followed by curly brackets `{}`. This defines the object. Within the object you can add keys, which have the properties. You name a key, use a colon `:`, and assign it a value. Keys are separated by commas `,`

- How do you remove a property from an object?
  You use the `delete` operator, and the dot notation to access the object and the property you wish to delete.

- What are the two ways to get or update the value of a property?
  You can use either `dot notation` or `bracket notation` to access the object and property you wish to update, then use the equals `=` to assign it that property a new value.

- What is the purpose of interfaces in TypeScript?
  Interfaces are a way you can annotate objects in TypeScript.

- What are two different ways to describe the shape of an object in TypeScript?
  You can use `Inteface` or `type` to describe the shape of an object in TypeScript.

- How do optional properties in a TypeScript interface differ from mandatory properties, and why are they useful?
  Optional properties differ from mandatory properties in that it is not considered an error if an optional property is not then included in an object (whereas a mandatory property in an interface that is not included in a subsequent object is an error). Optional properties are useful in allowing flexibility in annotating and defining objects.
