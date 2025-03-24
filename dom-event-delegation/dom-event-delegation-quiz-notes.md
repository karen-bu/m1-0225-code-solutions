# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  The `event.target` is the element responsible for firing off an event. For example, if a button is clicked for some interaction to happen, the button is the `event.target`.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  It is possible through `event bubbling`, where if an event occurring on a particular DOM element will be passed up all of that element's ancestors until it reaches the root of the document.

- What DOM element property tells you what type of element it is?
  The DOM element `tagName` tells you what type of element it is.

- What does the `element.closest()` method take as its argument and what does it return?
  `element.closest()` takes a selector as its argument and returns the closest ancestor of that element, or else `null` if there is no ancestor.

- How can you remove an element from the DOM?
  You can remove an element from the DOM with the `remove()` method attached to the variable holding the queried-for element that you wish to remove. i.e. `$button.remove()` would remove the $button variable that presumably stores a queried-for button.

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  You can use event delegation to avoid adding event listeners to every new element individually. You can attach an event listener to a parent element in order to handle an event, and when the event triggers it will search down all its child elements as well, without needing to add an event listener to every child element individually.
