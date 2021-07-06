class Observable {
  /* El contructor es lo que se crea cuando uno realiza una instancia de la clase.
    En este caso, al instanciar una clase Observer secreará una arreglo observers vacio */
  constructor() {
    this.subscriptors = [];
  }

  /* Metodo subscribe el cuál agregará el elemento que se le pase como argumento
    al arreglo observers de la clase. */
  subscribe(sub) {
    this.subscriptors.push(sub);
  }

  // Elimina del arreglo observers las suscripción que se pase como argumento
  unsubscribe(sub) {
    this.subscriptors = this.subscriptors.filter((item) => item !== sub)
  }

  /* Por cada observador que este en el arreglo se imprime un mensaje/notificación 
    del estado del observable */
    notifyObservable(message) {
    this.subscriptors.forEach((item) => {
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

class englishNotify {
  notify(message) {
    console.log(`Your fruits are: ${message.fruits}`);
  }
}

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
