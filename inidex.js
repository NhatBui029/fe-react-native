class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter((subscriber) => subscriber !== fn);
    }

    broadcast(data) {
        this.observers.forEach((subscriber) => subscriber(data));
    }
}

const observer = new EventObserver();

const observerA = (data) => console.log(`Observer A: ${data}`);
const observerB = (data) => console.log(`Observer B: ${data}`);

observer.subscribe(observerA);
observer.subscribe(observerB);

observer.broadcast("Hello, Observers!");