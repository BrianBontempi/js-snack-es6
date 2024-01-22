// ! snack 1
const tableName = 'Tavolo Vip';

const guests = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin'
];

// Creo l'array di oggetti guestsList
const guestsList = guests.map((guest, index) => ({
    tableName,
    guestName: guest,
    seatNumber: index + 1
  }));
  
  // Stampo l'array in console
  console.log(guestsList);


// ! snack 2

const students = [
    { id: 213, name: 'Marco della Rovere', grades: 78 },
    { id: 110, name: 'Paola Cortellessa', grades: 96 },
    { id: 250, name: 'Andrea Mantegna', grades: 48 },
    { id: 145, name: 'Gaia Borromini', grades: 74 },
    { id: 196, name: 'Luigi Grimaldello', grades: 68 },
    { id: 102, name: 'Piero della Francesca', grades: 50 },
    { id: 120, name: 'Francesca da Polenta', grades: 84 }
];


// 1. Studenti con voti superiore a 70
const studentsAbove70 = students.filter(student => student.grades > 70);

// 2. Studenti con voti superiore a 70 e id superiore a 120
const studentsAbove70AndIdAbove120 = students.filter(student => student.grades > 70 && student.id > 120);

// 3. Trasformo i nomi degli studenti in maiuscolo
const uppercaseNames = students.map(student => ({
  id: student.id,
  name: student.name.toUpperCase(),
  grades: student.grades
}));

// Stampo i risultati in console
console.log('Studenti con voti superiori a 70:', studentsAbove70);
console.log('Studenti con voti superiori a 70 e id > 120:', studentsAbove70AndIdAbove120);
console.log('Targhe con nomi in maiuscolo:', uppercaseNames);
  