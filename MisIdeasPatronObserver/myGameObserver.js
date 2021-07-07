let Observable = require("./Observable");

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

// Observador que informara sobre el estado de las variable numericas del observable
class valueNotify {
  notify(message) {
    console.log(`El mayor valor es ${message.maxVal} y el menor valor es ${message.minVal}`);
  }
}

// Observador que informará sobre la diferencia entre las variables.
class relationNotify {
  notify(message) {
    console.log(`La diferencia entre estos valores es de: ${message.maxVal - message.minVal}`);
  }
}

// Instancia del observable
let miPrueba = new myTest();

// Instancia de los observadores
const valueNot = new valueNotify;
const relationNot = new relationNotify;

miPrueba.subscribe(valueNot);
miPrueba.subscribe(relationNot);
miPrueba.change();
miPrueba.unsubscribe(valueNot);
miPrueba.change();