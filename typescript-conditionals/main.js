'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
// isUnderFive(number)
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
// isEven(number)
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// startsWithJ(string)
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrinkAndDrive(person) {
  return false;
}
// categorizeAcidity(pH)
function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7) {
    return 'acid';
  } else if (pH > 8) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
// introduceWarnerBro(name)
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return "We're the Warner Brothers!";
    case 'wakko':
      return "We're the Warner Brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}
// recommendMovie(genre)
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'John Wick';
    case 'comedy':
      return '21 Jump Street';
    case 'horror':
      return 'Hereditary';
    case 'drama':
      return 'Spirited Away';
    case 'musical':
      return "Singin' in the Rain";
    case 'sci-fi':
      return 'Nope';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
