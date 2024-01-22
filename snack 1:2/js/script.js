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