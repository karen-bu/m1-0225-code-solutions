# dom-manipulation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `className` property of element objects?
  The `className` property of an element object allows you to access, add, remove, or otherwise manipulate the CSS classes applied to an element by changing the value of className. It is a getter/setter in that it can retrieve current classes applied to an element or update/assign new classes to an element.

- How do you update the CSS class attribute of an element using JavaScript?
  You can use the `className` property of an element object. By updating `element.className` you can update the CSS class of an element with JavaScript.

- What is the `textContent` property of element objects?
  The `textContent` property of an element object represents the text content of an element and its descendants. It is a getter/setter because it can retrieve all current text content of a specific element object, as well as update text content.

- How do you update the text within an element using JavaScript?
  You can use the `textContent` property of an element object. By updating `element.textContent` you can update text within an element with JavaScript.

- Is the `event` parameter of an event listener callback always useful?
  The `event` parameter of an event listener callback is not always useful as sometimes the callback no longer applies even if the event is still continuing (i.e. when the Hot Button color stops updating even though clicking keeps happening).

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
  This assignment would be a lot more complicated if we didn't use a variable to keep track of the number of clicks, because the number of clicks could (theoretically) be infinite and it is a lot easier to store that in one place instead of an infinite number of places.

- Why is storing information about a program in variables better than only storing it in the DOM?
  Storing information about a program in variables is better than only storing it in the DOM because you can access a variable at any time, in various ways — it is a lot more flexible and accessible than only storing it in the DOM.
