'use strict';
// 1. convertMinutesToSeconds(minutes)
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
// 2. greet(name)
function greet(name) {
  return 'Hey ' + name + '!';
}
// 3. getArea(width, height)
const getArea = (width, height) => width * height;
const person = {
  firstName: 'Karen',
  lastName: 'Bu',
};
const getFirstName = (person) => person.firstName;
// 5. getLastElement(array)
const getLastElement = (array) => array[array.length - 1];
// 6. callOtherFunction(otherFunction, params)
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
// function test area
const getSeconds = convertMinutesToSeconds(1);
console.log('test of convertMinutesToSeconds:', getSeconds);
const greeting = greet('Karen');
console.log('test of greeting:', greeting);
console.log('test of getArea:', getArea(4, 5));
console.log('test of getFirstName:', getFirstName(person));
const getLastElementStringArray = [
  'wrister',
  'backhand',
  'snap shot',
  'slap shot',
  'backhand',
  'one-timer',
];
console.log(
  'test of getLastElementStringArray:',
  getLastElement(getLastElementStringArray)
);
const getLastElementNumberArray = [2, 4, 6, 8, 10];
console.log(
  'test of getLastElementNumberArray:',
  getLastElement(getLastElementNumberArray)
);
console.log(
  'test of callOtherFunction:',
  callOtherFunction(convertMinutesToSeconds, 2)
);
