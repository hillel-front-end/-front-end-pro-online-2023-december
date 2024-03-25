// -------- ADD events ------

// const block = document.querySelector('.block');

// console.dir(block, 'block');
//event - подія || обробник події

function onClickHandler() {
    console.log('--click--', this);
    this.classList.toggle('active')
}
// block.onclick = function() {
//     console.log(this, 'this declaration')
// };


// block.onclick = () => {
//     console.log(this, 'this arrow')
// };

// block.onclick = onClickHandler;


const blocks = Array.from(document.querySelectorAll('.block'));

// console.log(blocks, 'blocks');

// blocks.onclick = onClickHandler;
// blocks.foo = 13;



// blocks.forEach(block => block.onclick = onClickHandler);
// console.log(blocks, 'blocks');

// for(let block of blocks) {
//     block.onclick = onClickHandler;
// }

// --------- addEventListener (декілька обробників)

// block.addEventListener('click', onClickHandler);
//block.addEventListener('click', () => {})


// ----- remove listener ------
const block = document.querySelector('.block');

const button = document.querySelector('button#button');
const buttonSecond = document.querySelector('button#button2');
const container = document.querySelector('.container');

// button.addEventListener('click', function() {
    // block.removeEventListener('click', onClickHandler);
    // block.onclick = null;

    
    // const block = document.querySelector('.block');


    /// втрата посилання на елемент block
    // container.innerHTML = `
    //     <div class="block box"></div> 
    // `;
    
// });


// buttonSecond.addEventListener('click', function() {
    // block.addEventListener('click', onClickHandler);
    // const block = document.querySelector('.block');

    // console.log(document.querySelector('.block') === block)

    // block.classList.toggle('active');

// });

// ------------------------------------
// block.onclick = function() {
//     console.log('---click---');
// }

// block.onmousedown = function() {
//     console.log('---mousedown---');
// }

// block.onmouseup = function() {
//     console.log('---onmouseup---');
// }

function onMouseMoveHandler() {
    console.log('mousemove');
}

// block.addEventListener('mousemove', onMouseMoveHandler);

// block.addEventListener('mouseover', function() {
//     console.log('----mousever---');
//     this.classList.add('active')
//     this.addEventListener('mousemove', onMouseMoveHandler);
// })

// block.addEventListener('mouseleave', function(event) {
//     console.log('----mouseleave---', event);
//     this.classList.remove('active');
//     this.removeEventListener('mousemove', onMouseMoveHandler);


// });


// ---- EVENT OBJECT ----
// block.addEventListener('contextmenu', function(event) {
//     console.log('---oncontextmenu---', event);

//     event.preventDefault();
// });


// block.clientWidth, clientHeight
//


// Event coords
block.addEventListener('click', function(event)  {
    console.log(event, 'event');

    this.innerText = `
        event.clientX = ${event.clientX};
        event.clientY = ${event.clientY};
        event.pageX = ${event.pageX};
        event.pageY = ${event.pageY};
        event.offsetX = ${event.offsetX};
        event.offsetY =  ${event.offsetY};
    `;
})

