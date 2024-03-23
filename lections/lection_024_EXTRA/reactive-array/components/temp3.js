import books  from "../helper/reactive-array.js";

const block3 = document.querySelector('.block_3');

function displayTemp(item) {
    block3.innerHTML =  `
        <header> Block - 3 </header>
        <section>${JSON.stringify(item)} </section>
    `
}

books.subscribe(function(message) {
    console.log(`Block3 has message ==> ${JSON.stringify(message)}`)
    displayTemp(message)
});




export default displayTemp;
