const width: number = 10;
const height: number = 3;
const area: number = width * height;
console.log('valueof area:', area);
console.log('typeof area:', typeof area);

const bill: number = 50;
const payment: number = 100;
const change: number = payment - bill;
console.log('valueof change:', change);
console.log('typeof change:', typeof change);

const quizzes: number = 10;
const midterm: number = 35;
const final: number = 45;
const grade: number = (quizzes + midterm + final) / 3;
console.log('valueof grade:', grade);
console.log('typeof grade:', typeof grade);

const firstName: string = 'Karen';
const lastName: string = 'Bu';
const fullName: string = firstName + ' ' + lastName;
console.log('valueof fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

const pH: number = 5;
const isAcidic: boolean = pH < 7;
console.log('valueof isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

const headCount: number = 300;
const isSparta: boolean = headCount === 300;
console.log('value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';
console.log('value of motto:', motto);
console.log('typeof motto:', typeof motto);
