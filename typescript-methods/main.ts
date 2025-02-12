// The Math Object
const heroes = ['Billy Butcher', 'Homelander', 'Starlight', 'Frenchie'];
let randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;

const randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

// Array Methods
const library = [
  {
    title: 'Annihilation',
    author: 'Jeff VanderMeer',
  },
  {
    title: 'L.A. Confidential',
    author: 'James Ellroy',
  },
  {
    title: 'Tinker Tailor Soldier Spy',
    author: 'John Le Carre',
  },
];

const lastBook = library.pop();
console.log('value of lastBook:', lastBook);

const firstBook = library.shift();
console.log('value of firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value of library:', library);

// String Methods
const fullName = 'Karen Bu';

const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];

const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);

// Object Methods
const employee = {
  name: 'Xiaoming Wang',
  age: 61,
  position: 'Industrial Microbiologist',
};

const employeeKeys = Object.keys(employee);
console.log('value of employeeKeys:', employeeKeys);

const employeeValues = Object.values(employee);
console.log('value of employeeValues:', employeeValues);

const employeePairs = Object.entries(employee);
console.log('value of employeePairs:', employeePairs);
