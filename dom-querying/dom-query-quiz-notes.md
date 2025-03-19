# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  We log things to the console in order to check the code is working the way we intend it to, debug if something is not working, or simply get information about a function/element/object/variable etc.

- What is a "model"?
  A "model" is the method to represent an HTML/CSS web page in a way that JavaScript or TypeScript can read it and make changes.

- Which "document" is being referred to in the phrase Document Object Model?
  "Document" refers to the HTML document in the DOM model.

- What is the word "object" referring to in the phrase Document Object Model?
  "Object" refers to the representation of web pages in the DOM model.

- What is a DOM Tree?
  A DOM tree is the full webpage(s) represented as objects, so you can manipulate different parts of the web page or add interactivity. It is visualized with a tree because HTML is structured and hierarchical. With every new level of element in HTML (i.e. a tag within a tag) is a new branch of the tree. The `<html>` tag (the ultimate parent) is considered the root of the tree.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  `document.querySelector()` can retrieve a single elements from the DOM.

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  `document.querySelectorAll()` can retrieve multiple elements from the DOM at once.

- Why might you want to assign the return value of a DOM query to a variable?
  You might want to assign the return value of a DOM query to a variable so you can use this value later in various ways, such as in functions.

- What `console` method allows you to inspect the properties of a DOM element object?
  `console.dir` allows you to inspect the properties of a DOM element object.

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  `<script>` needs to be placed at the bottom of the HTML content instead of at the top to make sure it runs after all the elements have loaded (or else the script would have no elements to run on).

- What does `document.querySelector()` take as its argument and what does it return?
  `document.querySelector()` takes a CSS selector of any type as its argument, and it returns the first instance of that selector.

- What does `document.querySelectorAll()` take as its argument and what does it return?
  `document.querySelectorAll()` takes a CSS selector of any type as its argument, and it returns a NodeList of all nodes of that type.
