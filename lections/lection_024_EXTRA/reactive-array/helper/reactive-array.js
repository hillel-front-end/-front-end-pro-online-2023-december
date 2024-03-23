import Observer from "./observer.js";
// import renderBlock1 from './components/temp1.js';
// import renderBlock2 from './components/temp2.js';
// import renderBlock3 from './components/temp3.js';
// const books = [];
// books.push({ title: 'Harry Potter', athor: '...' });


class ReactiveArray extends Array {
    #observer = new Observer()

    push(newItem) {
        super.push(newItem);
        this.#observer.broadcast(newItem)

        // setTimeout(() => {
        //     renderBlock1(item);
        //     renderBlock22(item);
        //     renderBlock3(item);
        // }, 2000)

    }

    subscribe(fn) {
        this.#observer.subscribe(fn);
    }
}

const books = new ReactiveArray();
window.books = books; // for browser console

document.querySelector('form input').addEventListener('input', (event) => {
    books.push({
        title: event.target.value,
        author: 'valera'
    })
})

export default books;