# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  `Async` and `await` is esssentially is a way to write asynchronous code as it if is sequential. It makes JavaScript Runtime 'await' the asynchronous function completing before doing something else.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  `Async` and `await` differ from `Promise.then` and `Promise.catch` because it is not directly attached to the Promise, and instead places the Promise's resolve/reject value into a different variable to use later.

- When do you use `async`?
  You use `async` when you want to define an asynchronous function.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  You use `await` if you want the result of an asynchronous function to be returned before you proceed with something else. This also allows you to chain asynchronous functions together one after the other. You don't need `await` if you intend to run functions sequentially. Awaiting a synchronous function does functionally nothing.

- How do you handle errors with `await`?
  You handle errors with `await` by using `try/catch/finally` exception handlers.

- What do `try`, `catch` and `throw` do? When do you use them?
  `try` is the 'resolve' case of a Promise, used when you want to define a 'success' case of a particular asynchronous function.
  `catch` is the 'reject' case of a Promise, used when you want to define the 'failure' case of a particular asynchronous function.
  `throw`

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
