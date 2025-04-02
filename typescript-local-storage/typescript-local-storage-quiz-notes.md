# typescript-local-storage-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How do you store data in `localStorage`?
  You can store data in `localStorage` using `setItem()` and two parameters: a key for the data to be stored, and the value of the data.

- How do you retrieve data from `localStorage`?
  You can retrieve data from `localStorage` using `getItem()` and one parameter: the key for the data to be retrieved.

- What data type can `localStorage` save in the browser?
  `localStorage` can store strings, and only strings, in the browser, so all other data should be stringified before storing.

- When is the safest time to store user data?
  The safest time to store user data is when the data is non-sensitive and when the data needs to persist over time, but also when the data is not foundational to the running of the website (as a user may clear their cache at any point and delete this data).
