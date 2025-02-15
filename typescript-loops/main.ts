/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */

// getNumbersToTen()
function getNumbersToTen(): number[] {
  const numbers: number[] = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('value of getNumbersToTen:', getNumbersToTen());

// getNumbersToTwenty()
function getEvenNumbersToTwenty(): number[] {
  const evenNumbers: number[] = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('value of getNumbersToTwenty:', getEvenNumbersToTwenty());

// repeatWord(word, times)
function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log('value of repeatWord:', repeatWord('Bloody Mary ', 3));

// logEachCharacter (str)
function logEachCharacter(str: string): void {
  for (let i = 0; i < str.length; i++) {
    console.log('value of str[i]:', str[i]);
  }
}
logEachCharacter('');
logEachCharacter('Karen Bu');
logEachCharacter('Sphinx of black quartz, judge my vow');

// doubleAll(numbers)
function doubleAll(numbers: number[]): number[] {
  const doubled: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('value of doubleAll:', doubleAll([3, 6, 9, 12]));
console.log('value of doubleAll:', doubleAll([100, 200, 300, 400]));

// sumArray(numbers)
function sumArray(numbers: number[]): number {
  let sum = 0;
  for (const number of numbers) sum += number;
  return sum;
}
console.log('value of sumArray:', sumArray([1, 2, 3]));
console.log('value of sumArray:', sumArray([5, 10, 15]));

// reverseString(str)
function reverseString(str: string): string {
  let reversed = '';
  for (const character of str) reversed = character + reversed;
  return reversed;
}
console.log('value of reverseString:', reverseString('cactus'));
console.log('value of reverseString:', reverseString('stressed'));

// getKeys(obj)
function getKeys(obj: Record<string, unknown>): string[] {
  const keys: string[] = [];
  for (const key in obj) keys.push(key);
  return keys;
}

const student = {
  name: 'Karen Bu',
  age: 31,
  city: 'Long Beach',
};
console.log('value of getKeys(student)', getKeys(student));

const strayCat = {
  species: 'cat',
  owner: 'neighbor',
  color: 'calico',
};
console.log('value of getKeys(strayCat)', getKeys(strayCat));

// getValues(obj)
function getValues(obj: Record<string, unknown>): unknown[] {
  const values: unknown[] = [];
  for (const value in obj) values.push(obj[value]);
  return values;
}
console.log('value of getValues(student)', getValues(student));
console.log('value of getValues(strayCat)', getValues(strayCat));
