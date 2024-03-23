import books  from "../helper/reactive-array.js";
const block2 = document.querySelector('.block_2');



function displayTemp(item) {
    block2.innerHTML =  `
    <header> Block - 2 </header>
    <section>${JSON.stringify(item)} </section>
    `
}

books.subscribe(function(message) {
    console.log(`Block2 has message ==> ${JSON.stringify(message)}`)
    displayTemp(message)
});

