// ! Primo snack

// Creare un array di oggetti che descrivono biciclette da corsa
const bicycles = [
    { name: 'cannondale', peso: 8.2 },
    { name: 'bianchi', peso: 7.5 },
    { name: 'graziella', peso: 7.8 },
  ];

  // Trovare la bici con il peso minore utilizzando destructuring
  let lighterBike = bicycles[0];

  for (const bike of bicycles) {
    if (bike.peso < lighterBike.peso) {
        lighterBike = bike;
    }
  }
  
  console.log(`La bici con il peso minore è ${lighterBike.name} con un peso di ${lighterBike.peso} kg.`);


// ! Secondo snack

// Funzione per generare un numero casuale compreso tra min e max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Array di oggetti rappresentanti squadre di calcio
  const teams = [
    { nome: 'Juve', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
  ];
  
  