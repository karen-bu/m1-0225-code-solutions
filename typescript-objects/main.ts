// The `student` Object

interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudentProps = {
  firstName: 'Karen',
  lastName: 'Bu',
  age: 31,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Underpaid Photoshop Monkey (graphic designer)';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('typeof student:', typeof student);

// The `vehicle` Object
interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
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

// The `pet` Object

interface Pet {
  name?: string;
  kind?: string;
}

const pet: Pet = {
  name: 'Mita',
  kind: 'cat',
};

delete pet.name;
delete pet.kind;

console.log('valueof pet:', pet);
console.log('typeof pet:', typeof pet);
