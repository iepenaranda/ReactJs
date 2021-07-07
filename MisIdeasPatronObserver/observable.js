class Observable {
  /* El contructor es lo que se crea cuando uno realiza una instancia de la clase.
      En este caso, al instanciar una clase Observable se creará un arreglo de observers vacio */
  constructor() {
    this.observers = [];
  }

  /* Metodo que agrega un "observador" al arreglo observers */
  subscribe(sub) {
    this.observers.push(sub);
  }

  // Elimina del arreglo observers la suscripción del "observador" que se paso como argumento
  unsubscribe(sub) {
    this.observers = this.observers.filter((item) => item !== sub);
  }

  /* Por cada "observador" que exista en observer se imprime un mensaje/notificación 
      del estado del observable */
  notifyObservable(message) {
    this.observers.forEach((item) => {
      item.notify(message);
    });
  }
}

module.exports = Observable;
