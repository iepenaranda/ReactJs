class Observable {
  /* El contructor es lo que se crea cuando uno realiza una instancia de la clase.
    En este caso, al instanciar una clase Observer secreará una arreglo observers vacio */
  constructor() {
    this.observers = [];
  }

  /* Metodo subscribe el cuál agregará un "observador" al arreglo observers */
  subscribe(sub) {
    this.observers.push(sub);
  }

  // Elimina del arreglo observers la suscripción del "observer" que se paso como argumento
  unsubscribe(sub) {
    this.observers = this.observers.filter((item) => item !== sub)
  }

  /* Por cada "observador" que exista en observer se imprime un mensaje/notificación 
    del estado del observable */
    notifyObservable(message) {
    this.observers.forEach((item) => {
      item.notify(message);
    });
  }
}

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

let misFrutas = new exampleFruits();
let englishNot = new englishNotify();
let spanishNot = new spanishNotify();

misFrutas.subscribe(englishNot);
misFrutas.subscribe(spanishNot);
misFrutas.addFruit("Fresa");
misFrutas.unsubscribe(englishNot);
misFrutas.addFruit("Manzana");
