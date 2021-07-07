class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(notifyingClass) {
    this.observers.push(notifyingClass);
  }

  unsubscribe(notifyingClass) {
    this.observers = this.observers.filter(
      (observer) => observer instanceof notifyingClass !== true
    );
  }

  notifyObservable(mensaje) {
    this.observers.forEach((observer) => {
      observer.notify(mensaje);
    });
  }
}

class NumberExample extends Observable {
  constructor() {
    super();
    this.value = 0;
  }

  increment() {
    this.value++;
    this.notifyObservable(this);
  }
}

class NumberExampleSpanish {
  notify(mensaje) {
    console.log(`El nuevo número es: ${mensaje.value}`);
  }
}

class NumberExampleEnglish {
  notify(mensaje) {
    console.log(`The new number is: ${mensaje.value}`);
  }
}

let numberExample = new NumberExample();

numberExample.subscribe(new NumberExampleSpanish());
numberExample.subscribe(new NumberExampleEnglish());

numberExample.increment();
numberExample.increment();