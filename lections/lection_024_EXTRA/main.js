/*

  1. Jquery
  2. Factory method
  3. Create Reactive Array


*/

// _, $
// console.log(typeof $, '$');


const $span = $('div.container span:first-child');
console.log($span.text()); // innerText
 
// span.innerText = '123';

// jquery
const spanList = $('div.container span');
console.log(spanList.text(), 'spanList');

//Dom
const text = [].slice.call(
    document.querySelectorAll('div.container span'), 0
).map(span => span.innerText).join('');

console.log(text, 'text');

spanList.each((index, span) => console.log(span));
// [].slice.call(domCollection)

// STYLE
const button = {
    padding: '10px',
    border: '1px solid red',
    borderRadius: '30%',
    backgroundColor: 'black',
    display: 'inline-block',
    color: 'white'

};

$span.css(button)
console.log($span.css('display'))


// console.log(document.querySelector('.container span').style.display)

$span.addClass('button-accent')

// $('input').each().val()


// ---------- #2 Factory method --------------------

class Mercedes {
    constructor(model) {
        this.model = model;
    }
}

class VW {
    constructor(model) {
        this.model = model;
    }
}



// function getCar(brand) {

//     if (brand.toLowerCase() === 'mercedes') {
//         return new Mercedes('e200');
//     }

//     if (brand.toLowerCase() === 'vw') {
//         return new VW('passat');
//     }

// }


// const mercedes = getCar('mercedes');

// console.log(mercedes, 'mercedes')

class CarFactory {
    static brands = {
        mercedes: Mercedes,
        vw: VW // volkswagen
    };

    create(brand, model) {
        // if (brand.toLowerCase() === 'mercedes') {
        //     return new Mercedes('e200');
        // }

        // if (brand.toLowerCase() === 'vw') {
        //     return new VW('passat');
        // }

        const className = CarFactory.brands[brand];

        // return new className(model);
        // return new CarFactory.brands[brand](model);

        // throw new Error('.....')
    }
} 

const factory = new CarFactory()

const vw = factory.create('vw', 'b5');
console.log(vw);

const mers = factory.create('mercedes', 'ML200');
console.log(mers, 'mers');



// const undef = factory.create('mercedessss', 'ML200');

// const mapper = {
//     'vw': 'volkswagen'
// }

// const strBrands = Object.keys(CarFactory.brands).map(brand => {
//     return `<label> ${(mapper[brand] || brand).toLocaleUpperCase()} <input type="radio" name="brand" value="${brand}"</label>`
// }
// ).join('');


// document.querySelector('form').innerHTML = strBrands;