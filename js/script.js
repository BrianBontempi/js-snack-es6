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