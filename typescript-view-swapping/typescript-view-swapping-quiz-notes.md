# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  The `event.target` is the element responsible for firing off an event.

- What is the effect of setting an element to `display: none`?
  Setting an element to `display: none` effectively hides it from view and it will no longer show up on the browser.

- What does the `element.matches()` method take as an argument and what does it return?
  `element.matches()` takes a selector as an argument and returns a boolean.

- How can you retrieve the value of an element's attribute?
  You can retrieve the value of an element's attribute by using the `getAttribute` method of a queried-for DOM element.

- At what steps of the solution would it be helpful to log things to the console?'
  It is helpful at every step of the solution to log things to the console, but personally I found it most helpful to set up a `console.log()` to print something random when adding event listeners as a visual indicator to make sure the callback function is behaving the way I want it to. And once the callback function does what I want, I delete the `console.log()`.

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?
  If we didn't use event delegation, we could be writing an individual event listeners for that tab and view instead of relying on the existing code (which delegates events via a listener being placed on the overall tab container).

- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  If you didn't use a conditional loop to show or hide the views in the page you could write TypeScript code to instead redirect the user to a different page with a different view upon the right event.target firing. Frankly you probably don't need TypeScript, you could just probably do this using HTML.
