// prim: boolean, undefined, null, number, string, symbol
// ref: object, array, function

let a = 'aa'
let b = a;

// -- diff ---

let a1 = {}
let b1 = a1;

b1.a = 12;


function foo(obj) {
    obj.a = 12;
}

foo({ ...a1 });


// ------ This ----




const obj = {
    toDO() {
        const arrow = () => { // this,arguments  --> from scope
            console.log(this);
            console.log(arguments);
        };

        arrow();
    }
};



// arrow();

// ----------------

function toDo() {
    console.log(this, 'this');
}

// 80%
// toDo(); //undefined || window
// // obj.toDo();

// toDo.call(obj); // obj
// toDo.apply(obj);// obj

//20%:


toDo = toDo.bind(obj);//obj

// toDo(); // obj


const arrow = () => { // this,arguments  --> from scope
    console.log(this);
    console.log(arguments);
};



// ---- Scope ---

let a2 = 2;

function toDo2() {
    //SCOPE -->
    // le = { scope: GlobalScope}
    // let a2 = 13;
    console.log(a2, 'a2');
}


function toDo3() {
    //SCOPE -->
    let a2 = 1;

    toDo2();
}


// toDo3();


function closure() {
    // LE = { count: 0}
    const count = 0;

    return function() {
        return count++
    }

    // LE = null
}


const counter = closure();

closure = null;

// { let, const }

// ------------- class -----------------------

/*
 class Person {

    contructor(name) {
        this.name = name
        this.instMethod = function() {}
    }

    method - 1() {

    }

    method - 2() {

    }
 }

 const person = new Person('valera')

*/

class Person {
    lastName = null; // prop instance

    localTodo = () => {
        console.log(this, '<--- arrow this');
    }


    constructor(name, lastName) {
        console.log('---constructor---', this);
        this.name = name
        this.lastName = lastName;

        this.instMethod = () => {
            console.log(this, 'thi');
        }

        this.expression = function() {
            console.log(this, 'this');
        }

        // this.toDo = function() {
        //     console.log('-- inst todo--');
        // }
    }

    toDo() {
        console.log('-- proto todo--');
    }

 }


//  function Person(name, lastName = null) {
//     this.name = name
//     this.lastName = lastName;
//     this.instMethod = function() {}

//     Person.prototype.toDo = function(){}
//  }


// const obj2 = {
//     method: () => {
//         console.log(this, 'this');
//     }
// }


 const person = new Person('valera', 'Ternavsky')


//  obj2.method.call(obj2);


// person.localTodo.call({});

// person.expression.call({});

console.log(person);

// setTimeout(person.expression);
// setTimeout(person.instMethod)

function mySetTimeout(callback) {
    callback();
}


// mySetTimeout(person.expression);
// mySetTimeout(person.instMethod)


person.toDo();


//-------------- ----------------

// function Vehicle() {}

// obj = {
//     displayInfo: function() {},

//     displayInfo(){
//         console.log(`
//             brand ==> ${this.brand}
//             model ==> ${this.model}
//             year  ==> ${this.year}
//         `)
//     }
// }

class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year  = year;
    }

    displayInfo() {
        console.log('---parent displayInfo ----');
        console.log(`
            brand ==> ${this.brand}
            model ==> ${this.model}
            year  ==> ${this.year}
        `)
    }
}

// class Helicopter extends Vehicle {
//     constructor(brand, model, year, blades) {
//         this.blades = blades; 
//     }
// }

class Car extends Vehicle {

    // private, protected, public
    //private dinstance = 1000;

    #dinstance = 0; // Encapsulation

    constructor(brand, model, year, wheels) {
        super(brand, model, year)
        this.wheels = wheels;
    }

    #diagnostic() {
        return Boolean(Math.round(Math.random() * 100) % 2);
    }

    //access to private
    get dinstance() {
        return this.#dinstance;
    }

    set dinstance(v) {
        if (false) {
            this.#dinstance = v;
        }
    }

    drive(speed, time) {
        const result = this.#diagnostic();

        if (result) {
            this.#dinstance = speed * time;
            console.log(`${this.model} is driving`);
        }

    }

    displayInfo() {
        // console.log(`
        //     brand ==> ${this.brand}
        //     model ==> ${this.model}
        //     year  ==> ${this.year}
        // `);
        super.displayInfo(); // call perent method super.parentMethod()
        console.log(`wheels ==> ${this.wheels}`)
    }
}

// const veh = new Vehicle(
//     'Mercedes',
//     'R350',
//     2014
// );


// console.log(veh.displayInfo());

const car = new Car(
    'Mercedes',
    'R350',
    2014,
    4
);


// car.displayInfo();

// console.log(car, 'car');

// car.#dinstance = 0;

// console.log(car, 'car');

// console.log(car.dinstance);

car.drive(100, 2);

console.log(car.dinstance);
car.dinstance = 3000;
console.log(car, 'car');

// ----------------


class Amphibious extends Car {
    // constructor(...args) {
    //     super(...args)
    // }

    sweam() {
        console.log('swimming');
        console.log(this.dinstance); 
        // console.log(this.#dinstance) dinstance from Car --> Error 
    }
}



const amph = new Amphibious(
    'Amphibious',
    'dive-2025',
    2020,
    2
);

console.log(amph, 'amph');

amph.sweam();
amph.drive(200, 1);

console.log(amph.dinstance, 'amph');