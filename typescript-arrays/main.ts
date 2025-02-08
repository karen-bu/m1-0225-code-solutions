// The colors Array
const colors: string[] = ['red', 'white', 'blue'];

console.log('first value of colors:', colors[0]);
console.log('second value of colors', colors[1]);
console.log('third value of colors:', colors[2]);

const america: string = `America is ${colors[0]}, ${colors[1]}, and ${colors[2]}`;
console.log('valueof America:', america);

colors.splice(2);
colors.push('green');

const mexico: string = `Mexico is ${colors[0]}, ${colors[1]}, and ${colors[3]}`;
console.log('valueof Mexico:', mexico);

console.log('value of colors:', colors);
console.log('typeof colors:', typeof colors);

// The students Array
const students: string[] = ['Jesse', 'Corinne', 'Marisa', 'Paul'];
const numberOfStudents: number = students.length;
console.log(`There are ${numberOfStudents} students in the class`);

const lastIndex: number = numberOfStudents - 1;
const lastStudent: string = students[lastIndex];
console.log(`The last student in the array is ${lastStudent}`);

console.log('valueof students:', students);
console.log('typeof students:', typeof students);
