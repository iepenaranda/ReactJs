let Observable = require("./Observable");

// Clase observable que se utilizará para almacenar frutas
class exampleFruits extends Observable {
  constructor() {
    super();
    this.fruits = [];
  }

  // Metodo que guarda la fruta que se haya pasado como argumento en el arreglo fruits.
  addFruit(fruit) {
    this.fruits.push(fruit);
    this.notifyObservable(this);
  }
}

// Observador que maneja la información en inglés del observable
class englishNotify {
  notify(message) {
    console.log(`Your fruits are: ${message.fruits}`);
  }
}

// Observador que maneja la información en español del observable
class spanishNotify {
  notify(message) {
    console.log(`Tus frutas son: ${message.fruits}`);
  }
}

// Instancia del observable
let misFrutas = new exampleFruits();

// Instancia de los suscriptores
let englishNot = new englishNotify();
let spanishNot = new spanishNotify();

// Suscripciones realizadas al observable
misFrutas.subscribe(englishNot);
misFrutas.subscribe(spanishNot);
misFrutas.addFruit("Fresa");
misFrutas.unsubscribe(englishNot);
misFrutas.addFruit("Manzana");
