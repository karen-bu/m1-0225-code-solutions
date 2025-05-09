# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?
  `fetch()` returns a promise that responves to the `Response` object representing the outcome of the request.

- What is the default request method used by `fetch()`?
  The default request method used by `fetch()` is `GET`.

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  You can specify the request method by passing the `method` you want to use as a second argument to `fetch()` (with the first argument being the URL you want to fetch from).

- How does `fetch` report errors?
  `fetch()` reports errors if there is a network failure or if something prevented the request from completing. It does not consider an error code from the server to be a failure.
