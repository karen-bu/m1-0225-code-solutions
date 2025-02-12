// 1. convertMinutesToSeconds(minutes)
function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

// 2. greet(name)
function greet(name: string): string {
  return 'Hey ' + name + '!';
}

// 3. getArea(width, height)
const getArea = (width: number, height: number): number => width * height;

// 4. getFirstName(person)

interface Person {
  firstName: string;
  lastName: string;
}

const person: Person = {
  firstName: 'Karen',
  lastName: 'Bu',
};

const getFirstName = (person: Person): string => person.firstName;

// 5. getLastElement(array)

const getLastElement = (array: any[]): any => array[array.length - 1];

// 6. callOtherFunction(otherFunction, params)

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}

// function test area

const getSeconds: number = convertMinutesToSeconds(1);
console.log('test of convertMinutesToSeconds:', getSeconds);

const greeting: string = greet('Karen');
console.log('test of greeting:', greeting);

console.log('test of getArea:', getArea(4, 5));

console.log('test of getFirstName:', getFirstName(person));

const getLastElementStringArray: string[] = [
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
const getLastElementNumberArray: number[] = [2, 4, 6, 8, 10];
console.log(
  'test of getLastElementNumberArray:',
  getLastElement(getLastElementNumberArray)
);

console.log(
  'test of callOtherFunction:',
  callOtherFunction(convertMinutesToSeconds, 2)
);
