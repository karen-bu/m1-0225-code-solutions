interface Book {
  isbn: string;
  title: string;
  author: string;
}

const bookshelf: Book[] = [
  {
    isbn: '978-0062068408',
    title: 'Mystic River',
    author: 'Dennis Lehane',
  },
  {
    isbn: '978-0374104092',
    title: 'Annihilation',
    author: 'Jeff VanderMeer',
  },
  {
    isbn: '978-1501134616',
    title: 'Midnight in Chernobyl',
    author: 'Adam Higginbotham',
  },
];

console.log('bookshelf:', bookshelf);
console.log('type of bookshelf:', typeof bookshelf);

const bookshelfJSON = JSON.stringify(bookshelf);
console.log('bookshelfJSON:', bookshelfJSON);

const studentJSON = '{"number ID": "2118", "string name": "Karen Bu"}';

console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);

const student = JSON.parse(studentJSON);
console.log('student parsed:', student);
console.log('typeof student:', typeof student);
