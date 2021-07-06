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

// Observable que manejara dos variables númericas
class myTest extends Observable{
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

// Oservador que informara sobre el estado de las variable numericas del observable
class valueNotify {
  notify(message) {
    console.log(`El mayor valor es ${message.maxVal} y el menor valor es ${message.minVal}`);
  }
}

// Oservador que notificará sobre la diferencia entre las variables.
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