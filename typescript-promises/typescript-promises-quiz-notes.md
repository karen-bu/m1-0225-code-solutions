# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?
  The Event Queue model of Promises puts callback functions of asynchronous operations in a queue for when the operation completes. The queue is checked regularly and the callback functions are processed in the order they arrive.

- What are the three states a Promise can be in?
  The three states a Promise can be in are pending (neither resolved nor rejected), fulfilled (resolved), and rejected.

- How do you handle the fulfillment of a Promise?
  The fulfillment of a Promise is handled by attaching a `.then()` method that defines a callback function to be executed if the Promise is fulfilled.

- How do you handle the rejection of a Promise?
  The rejection of a Promise is handled by attaching a `.catch()` method that defines a callback to be executed if the Promise is rejected.
