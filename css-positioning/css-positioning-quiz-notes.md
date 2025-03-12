# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?
  The default value for the `position` property of HTML elements is `static positioning`

- How does setting `position: relative` on an element affect document flow?
  Setting `position: relative` keeps an element within the document flow. It still takes up space compared to other elements.

- How does setting `position: relative` on an element affect where it appears on the page?
  Setting `position: relative` allows it to be moved left, right, up, or down, including overlapping other elements.

- How does setting `position: absolute` on an element affect document flow?
  Setting `position: absolute` takes it out of the document flow entirely and positions it only relative to its parent. It no longer occupies space.

- How does setting `position: absolute` on an element affect where it appears on the page?
  Setting `position: absolute` means it can be placed precisely on the page, including overlapping other documents. However, as it has been taken out of the flow, it will not affect other elements.

- How do you constrain an absolutely positioned element to a containing block?
  Since absolutely positioned elements are positioned relative to their immediate parent, you can create a `div` or similar as its immediate parent and use that as the constrainer.

- What are the four box offset properties?
  The four box offset properties are `top` (moves elements down), `bottom` (moves elements up), `right` (moves elements left), and `left` (moves elements right)
