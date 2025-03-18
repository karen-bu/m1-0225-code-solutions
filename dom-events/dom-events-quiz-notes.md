# dom-events-quiz-note

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  We log things to the console in order to check the code is working the way we intend it to, debug if something is not working, or simply get information about a function/element/object/variable etc.

- What is the purpose of events and event handling?
  Events and event handling allow us to add interactivity to a web page. With events/event handling, we are able to trigger certain code based on some action taken by the user.

- Are all possible parameters required to use a JavaScript method or function?
  Not all possible parameters are required to use a JavaScript method or function, though in some cases if you don't use all the parameters the function will not execute correctly.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  The `.addEventListener` object lets you set up a function that is called when a specific type of event occurs.

- What is a callback function?
  A callback function is a function passed into another function as an argument. Specifically for events/event handling, callback functions are used to respond to events after a trigger from an interaction or another asynchronous action.

- What object is passed into an event listener callback when the event fires?
  The `event` object, automatically created by JavaScript, is passed into an event listener callback when the event fires.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The `event.target` is the element responsible for firing a certain event. If you are not sure about it, you can use the console by logging log `event.target` which would print the `event.target` element to the console for further inspection.

- What is the difference between these two snippets of code?

  ```js
  element.addEventListener('click', handleClick);
  ```

  ```js
  element.addEventListener('click', handleClick());
  ```

  The difference between these two code snippets is that the first snippet will not call the function `handleClick` immediately, and the second snippet will immediately call the function `handleClick()`.
