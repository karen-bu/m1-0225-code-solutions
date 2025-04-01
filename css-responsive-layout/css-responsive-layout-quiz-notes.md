# css-responsive-layout-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a **breakpoint** in responsive Web design?
  A `breakpoint` in responsive web design is a specific value at which a page's content and design changes, typically in order to present good readability and accessibility at different screen sizes.

- What is the advantage of using a percentage (_e.g._ `50%`) width instead of a fixed (_e.g._ `px`) width for a "column" class in a responsive layout?
  Using a percentage instead of a fixed width for a "column" class in a responsive layout is an advantage because a percentage allows relative scaling, making it more adaptable to extremely large or extremely small sizes. On the other hand, pixels are static

- If you introduce CSS rules for a smaller `width` _after_ the styles for a larger `width` in your style sheet, the CSS rules for the **smaller** `width` will "win". Why is that?
  Because the way that CSS hierarchy works. The `source order` property of the CSS cascade dictates that the style written latest will be applied.
