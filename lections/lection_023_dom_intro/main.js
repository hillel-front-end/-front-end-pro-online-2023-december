// ----------- DOM and BOM ---------------


// -> Document object model

/*

object = {

}

*/

// alert, confirm, setTimeout, DOM

// .html


/*
document.html

<html>
    <body>
        <div class="hidden">some text</div>
        <div></div>
    </body>
</html>

*/

// XML

// ----- DOM

/*
document = {
    body: {
        tagName: 'body',
        className: '',
        id: '',
        children: [
            {
                tagName: 'div',
                className: 'hidden',
                id: '',
                innerText: 'some text'
            },
            {
                tagName: 'div',
                className: '',
                id: '', 
            }
        ],
        childNodes: [
            {
                innerText: '-'
            },
            {
                tagName: 'div',
                className: '',
                id: '', 
            }
        ] 
    }
}

*/

console.log(window.alert); // alert()
// console.log(window.document);
// console.dir(document.body.childNodes, 'document');
// console.dir(document.body.children, 'document');

// ------------ BOM

/*
 {
    document: {},
    screen: {},
    navigation: {},
    location: {}
 }
*/

// ***** screen ****

console.log(screen);

// **** navigator ***

console.log(navigator.language);
console.log(navigator.platform);
console.log(navigator.userAgent);

// navigator.geolocation.getCurrentPosition((coords) => {
//     console.log(coords, 'coords');
// }, () => {
//     console.log('---block---');
// });

// navigator.geolocation.watchPosition(() => {
//     console.log('')
// })

// ** location ***

console.log(location.href);
console.log(location.pathname);
console.log(location.search);

const queryParams = new URLSearchParams(location.search);

console.log(queryParams.get('key2'))
console.log(queryParams.has('key'))


// ====> history 

//history.pushState()


//-------------- DOM Continue ------------------------


const div = document.body.children[0];
const nested = div.children[0];

console.log(div, 'div');
console.log(nested, 'nested');

// DOM API

const logoId = document.getElementById('logo');//if="logo"
console.dir(logoId);


const classes = document.getElementsByClassName('gallery');
console.log(classes, 'classes');

// querySelect, querySelectorAll


const gallery = document.querySelector('#block .gallery');
console.log(gallery, 'gallery');


// const galleries = [...document.querySelectorAll('#block .gallery')];
const galleries = Array.from(document.querySelectorAll('#block .gallery')); 
console.log(galleries, 'gallery');

// console.log(galleries.map(node => node.className));
// console.log(galleries.forEach(node => console.dir(node)));
// console.log(galleries.filter(node => node.className.indexOf('foo') > 0))


const block = document.querySelector('div.block');

console.log(block.style, 'blocks');

const img = document.querySelector('a');
// console.log(img.href, 'href');
// console.log(block.href, 'href');

setTimeout(() => {
    // block.style.margin = `10px`;
    // block.style.height = `100px`;
    // block.style.backgroundColor = 'black';
    // block.style.borderTop = '10px solid red';

    block.className = `${block.className} block__dashed`;
}, 3000)