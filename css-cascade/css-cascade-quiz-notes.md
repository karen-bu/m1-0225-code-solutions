# css-cascade-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the four components of "the Cascade".
  The four components of 'the Cascade' are `source order`, `inheritance,` `specificity,`, and `!important`.

- What does the term "source order" mean with respect to CSS?
  With respect to CSS, `source order` means the order in which the ruleset is declared – in case of clashes in rulesets, the properties of the LAST written ruleset in the stylesheet will take precedence over the previous ones.

- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
  It is possible for the styles of a parent element to be applied to its children without additional rules through the `inheritance` property of CSS.

- List the three selector types in order of increasing specificity.
  `Universal selectors`, `class selectors`, `id selectors`

- Why is using `!important` considered bad practice?
  Using `!important` is considered bad practice because it makes it interrupts the normal flow of the cascade, makes it hard to debug and maintain code, and if there are multiple instances of `!important` they will clash with each other.Or as my favorite coworker likes to tell everyone at work telling her things, `if everything is important, nothing is important :-)`
