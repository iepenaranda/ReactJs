class Observable {
  /* El contructor es lo que se crea cuando uno realiza una instancia de la clase.
  En este caso, al instanciar una clase Observer secreará una arreglo observers vacio */
  constructor() {
    this.observers = [];
  }

  /* Metodo subscribe el cuál agregará el elemento que se le pase como argumento
  al arreglo observers de la clase. */
  subscribe(notification) {
    this.observers.push(notification);
  }

  // Elimina del arreglo observers las suscripción que se pase como argumento
  unsubscribe(notification) {
    this.observers = this.observers.filter(
      (observer) => observer instanceof notification !== true
    );
  }

  /* Por cada observador que este en el arreglo se imprime un mensaje/notificación 
  del estado del observable */
  notifyObserver(message) {
    this.observers.forEach((observer) => {
      observer.notify(message);
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
    this.notifyObserver(this.fruits);
  }
}

class englishNotify {
  notify(message) {
    console.log(`Your fruits are: ${message}`);
  }
}

class spanishNotify {
  notify(message) {
    console.log(`Tus frutas son: ${message}`);
  }
}

let misFrutas = new exampleFruits();

misFrutas.subscribe(new englishNotify());
misFrutas.subscribe(new spanishNotify());

misFrutas.addFruit("Fresa");
misFrutas.addFruit("Manzana");