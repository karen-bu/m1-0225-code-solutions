# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  Yes, `document.createElement()` inserts a new element in the page with a specified tag name.

- How do you add an element as a child to another element?
  The `appendChild` method can add an element as the last child of another element.

- What do you pass as the arguments to the `element.setAttribute()` method?
  You pass CSS selectors and the value of that selector (id value, class type, tag name) to the `element.setAttribute()` method.

- What steps do you need to take in order to insert a new element into the page?
  To insert a new element into the page, you need to:

1. Create a new DOM object
2. Set the object's attribute and properties.
3. Append the object to a parent.

- What is the `textContent` property of an element object for?
  The `textContent` property of an element object represents the text content of an element and its descendants, and it can also be used to update the text content.

- Name two ways to set the `class` attribute of a DOM element.
  You can set the `class` attribute of a DOM element by creating a new DOM element and using the `setAttribute` method, or by updating an existing class with the `className` method.

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  Two advantages to defining a function to create something are:

1. Speed and efficiency: a function can cycle through data and build code much faster than you can, and if you need to update data it can also update faster than you going through manually and doing it.
2. Fewer errors: manually creating something opens you up to the possibility of making human errors vs. a function where (theoretically) that risk is less
