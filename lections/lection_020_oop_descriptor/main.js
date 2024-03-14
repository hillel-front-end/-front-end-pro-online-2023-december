// ============  [[Prototype]] ===========


//---------- Array.prototype ------
const array = [];
const array2 = new Array();

console.log(array.forEach === array2.forEach);

console.log(array.__proto__, '1');
console.log(array2.__proto__, 'array2'); //get  __proto__ --> [[Prototype]]


console.log(array.__proto__ === array2.__proto__);


console.log(Array, 'Array')

console.log(Array.prototype === array.__proto__)


//----------- Function.prototype -------

function foo(){}

const foo2 = function(){}

console.log(foo.bind === foo2.bind, 'bind');
console.dir(foo.__proto__);

console.log(Function.prototype === foo.__proto__);


// -------------- __proto__ ---------


const parent = {
    foo: 1,

    slice() {},
    indexOf() {}
};

const child_1 = {
    firstName: 'Valera',
    __proto__: parent // set [[Prototype]] (null || object)
};

const child_2 = {
    firstName: 'Alex',
    __proto__: parent
};

console.log(child_1.slice == child_2.slice, 'slice');

// child_1.firstName = 'Valera';
// child_2.firstName = 'Alex';

// child_1.__proto__.firstName = 'Valera';
// child_2.__proto__.firstName = 'Alex';

// console.log(child_1.firstName, 'child_1');
// console.log(child_2.firstName, 'cshild2')

// Array.prototype.forEach
// array.__proto__.forEach = function() {
//     console.log('loloolo');
// }

// array.forEach();

// const array3 = [];

// array3.forEach();
// array3.__proto__.forEach();


// ---------- function contstructors -------------


new Array();
new Object();

//custom:


function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;

    // this.run = function() {
    //     console.log(`${this.name} is running`)
    // }

    Object.defineProperty(this, 'fullName', {
        get() {
          return `${this.name} ${this.lastName}`
        }
    })

    // return {}; // override -- > this
}

Person.prototype.run = function() {
    console.log(`${this.name} is running`)
}

const personU = Person();// call function
console.log(personU, 'personU');

const person = new Person('Valera', 'Ternavsky', 20); // call function constrictor
const person2 = new Person('Alex', 'Alexov', 25);

/*
new Person();

 1) new ---> створення нового об'єкту "X"
 2) Person() ----> виклик
 3) this ---> перенаправлена на ново створений об-кт O ==> this = X(1);
 4) X.__proto__ = Person.prototype
*/


// console.log(typeof person, 'person'); //object
console.log(person, 'person');
console.log(person2, 'person2');


// console.log(typeof Person.prototype, 'Person.prototype');

// console.log(person.__proto__ === Person.prototype);
// console.log(person2.__proto__ === Person.prototype);


console.log(person.run === person2.run)

person.run(); /// ?? this
person2.run(); /// ?? this