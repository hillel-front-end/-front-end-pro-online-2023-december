export default class Observer {
    subscribers = []

    subscribe(fn) {
        this.subscribers.push(fn);
    }

    unsubscribe(fn) {
        this.subscribers = this.subscribers.filter(curFn => curFn !== fn);
    }

    broadcast(message) {
        this.subscribers.forEach(fn => fn(message))
    }
}