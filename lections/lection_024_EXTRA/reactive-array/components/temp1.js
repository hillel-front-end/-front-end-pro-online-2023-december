import books  from "../helper/reactive-array.js";

console.log(books, 'books');

const block1 = document.querySelector('.block_1');

function displayTemp(item) {
    block1.innerHTML = `
        <header> Block - </header>
        <section>${JSON.stringify(item)} </section>
    `
}


books.subscribe(function(message) {
    console.log(`Block1 has message ==> ${JSON.stringify(message)}`);
    displayTemp(message);
});

console.log(block1 , 'block1');

