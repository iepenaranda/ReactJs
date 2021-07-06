export class Observable {
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
  notifyObservable(message) {
    this.observers.forEach((observer) => {
      observer.notify(message);
    });
  }
}