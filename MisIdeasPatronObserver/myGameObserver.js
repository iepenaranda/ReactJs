class Observable {
  /* 
  El contructor es lo que se crea cuando uno realiza una instancia de la clase.
  En este caso, al instanciar una clase Observer secreará una arreglo observers vacio 
  */
  constructor() {
    this.observers = [];
  }

  /*
  Metodo subscribe el cuál agregará el elemento que se le pase como argumento
  al arreglo observers de la clase.
  */
  subscribe(notification) {
    this.observers.push(notification);
  }

  // Elimina del arreglo observers las suscripción que se pase como argumento
  unsubscribe(notification) {
    this.observers = this.observers.filter(
      (observer) => observer instanceof notification !== true
    );
  }

  /*
  Por cada observador que este en el arreglo se imprime un mensaje/notificación 
  del estado del observable
  */
  notifyObservable(message) {
    this.observers.forEach((observer) => {
      observer.notify(message);
    });
  }
}

class myTest extends Observable{
  // En este caso hay dos variables numericas que voy a ir cambiando
  constructor(){
    super();
    this.minVal = -1;
    this.maxVal = 1;
  }

  change(){
    this.minVal = this.minVal * 2;
    this.maxVal = this.maxVal * 2;
    this.notifyObservable(this);
  }
}

// Me mostrara el valor de las variables en ese momento
class valueNotify {
  notify(message) {
    console.log(`El mayor valor es ${message.maxVal} y el menor valor es ${message.minVal}`);
  }
}

// Me mostrara la diferencia entre las variables
class relationNotify {
  notify(message) {
    console.log(`La diferencia entre estos valores es de: ${message.maxVal - message.minVal}`);
  }
}

let miPrueba = new myTest();
miPrueba.subscribe(new valueNotify);
miPrueba.subscribe(new relationNotify);

miPrueba.change();
miPrueba.change();