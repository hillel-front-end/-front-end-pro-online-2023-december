function Person() {
    //return 'aaa'; // проігнорується
    return {}; // <---{} != this
}

// const person = new Person();
// const person_2 = new Preson(); 

/*
    person = { __proto_ : .. };
    person_2 = { __proto__: .. };

*/

const arr = [];


console.log(arr instanceof Array);
const func = function(){};

// console.log(func instanceof Object);
// console.log(arr instanceof Object);

console.log({}.valueOf);

console.log({}.valueOf === func.valueOf); // true

// -----------------------------------------

// function HTMLElement(tagName, className, id, href) {
//     this.tagName = tagName;
//     this.className = className;
//     this.id = id;

//     if (tagName === 'a') {
//         this.redirect = function(){};
//         this.href = '..'
//     }

//     if (tagName == 'img') {
//         this.showPicture = function(){}
//     }

// }

// HTMLElement.prototype.redirect = function() {
//     console.log('redirect');
// };


// HTMLElement.prototype.showPicture = function() {
//     console.log('show -- picture');
// };


// const a = new HTMLElement('a', 'link-to-facebook', 'facebook');
// const a2 = new HTMLElement('a', 'link-to-facebook', 'facebook');

// a.redirect = () => {}; // bad


// const img = new HTMLElement('img', 'favicon.png', 'fa-facebook');
// const img2 = new HTMLElement('img', 'favicon.png', 'fa-facebook');

// console.log(img, 'img');
// console.log(img2, 'img2');
// console.log(a, 'a');
// console.log(a2, 'a2');


// console.log(a, 'a');
// console.log(img, 'img');

// img.redirect();

// ----------------------

const mySuper = (parentConstr,  instance, ...args) => {
    parentConstr.apply(instance, args)
}

function HTMLElement(tagName, className, id) {
    this.tagName = tagName;
    this.className = className;
    this.id = id;
}

HTMLElement.prototype.render = function() {
    console.log('Render from HTMLElement --> ' + this.tagName)
}

// console.log(HTMLElement.prototype.__proto__ = null, 'HTMLElement.prototype')

function HTMLImg(src, className, id, flag) {
    mySuper(HTMLElement, this, 'img', className, id)// HTMLElement.apply(this, [img', className, id]);
    this.src = src;

    if (flag) {
        this.render = function() {
            console.log('OWN IMG RENDER');
        }
    }
}

// HTMLImg.prototype = Object.create(HTMLElement.prototype); // { __proto__: HTMLElement.prototype }

HTMLImg.prototype.__proto__ = HTMLElement.prototype;

HTMLImg.prototype.showPicture = function() {
    console.log(`showPicture to ${this.src}` );
}


// HTMLImg.prototype.render = function() {
//     console.log('!!Render HTMLImg--> ' + this.tagName)
// }

const img = new HTMLImg('http://google-drive', 'picture-site', 'picture-id', true);
const img2 = new HTMLImg('http://google-drive', 'picture-site', 'picture-id',);

// img.showPicture();
// img.redirect();
// img.render();

// console.log(img, 'img');

img.render();
img2.render();


/// ------- HTML Anchor ---------
function HTMLAnchor(href, className, id) {
    mySuper(HTMLElement, this, 'img', className, id)
    this.href = href;
}

HTMLAnchor.prototype = Object.create(HTMLElement.prototype);

HTMLAnchor.prototype.redirect = function() {
    console.log(`redirect to ${this.href}` );
}

// HTMLAnchor.prototype.render = function() {
//     console.log('Render --> ' + this.tagName)
// }

const a = new HTMLAnchor('http://web-site', 'web-site', 'some-id');

// console.log(a, 'a');

// a.render();
// console.log(a2, 'a2');



// console.log(HTMLImg instanceof Object)
// console.log(img instanceof Object)
// console.log([] instanceof Object)

// // 
// console.log(Object.prototype.toString)
// console.log([].toString)