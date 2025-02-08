'use strict';
// The `student` Object
const student = {
  firstName: 'Karen',
  lastName: 'Bu',
  age: 31,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Underpaid Photoshop Monkey (graphic designer)';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('typeof student:', typeof student);
const vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2022,
};
vehicle['color'] = 'Sonic Grey Pearl';
vehicle['isConvertible'] = false;
console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
console.log('typeof vehicle:', typeof vehicle);
const pet = {
  name: 'Mita',
  kind: 'cat',
};
delete pet.name;
delete pet.kind;
console.log('valueof pet:', pet);
console.log('typeof pet:', typeof pet);
