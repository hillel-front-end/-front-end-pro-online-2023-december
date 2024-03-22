const boxes = [...document.querySelectorAll('.box')];
//box.className = 'some-class';

const random = (min, max) => Math.round(Math.random() * (max - min) + min);
const randomColor = (min = 0 , max = 255) => `rgb(${random(min, max)}, ${random(min, max)}, ${random(min, max)})`
const moveBox = (box) => {
    box.style.left = `${random(0, innerWidth - box.clientWidth)}px`;
    box.style.top  = `${random(0, innerHeight - box.clientHeight)}px`;
    box.style.backgroundColor = randomColor(0, 255);
}

// moveBox(box);

// console.log(box.clientHeight);
// console.log(box.clientWidth);
// boxes[0].clientWidth
console.log(boxes)
setInterval(() => {
    boxes.forEach(moveBox);
}, 1000);

