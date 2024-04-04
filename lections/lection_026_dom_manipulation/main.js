const menu = document.querySelector(".menu");
/// ....

const menuItem = menu.querySelector(".item.item_2");

const items = document.querySelectorAll(".item");

// DOM Navigation
// console.log(menu.children);
// console.log(menu.firstElementChild);
// console.log(menu.lastElementChild);
// console.log(menu.previousElementSibling);
// console.log(menu.nextElementSibling);
// console.log(menu.parentElement);
// console.log(menu.parentNode);

// console.dir(menu, "menu");
// console.log(items, "items");

function onClick() {
  console.log("click");
  console.log(this.closest(".menu"));
}

for (let item of items) {
  item.addEventListener("click", onClick);
}

/// ---- `class` -----

// console.log(menuItem.className);

// menuItem.className += " foo";
// console.log(menuItem.classList);
// console.log(menuItem.classList.add("foo"));
// console.log(menuItem.classList.contains("foo")); // true \ false

// if (menuItem.classList.contains("foo")) {
//   menuItem.classList.remove("foo");
// } else {
//   menuItem.classList.add("foo");
// }

// setInterval(() => {
//   menuItem.classList.toggle("foo");
// }, 2000);

/// ---- `attrs` -----

// console.log(menuItem.foo);
// console.log(menuItem.helloValera)

// console.log(menuItem.getAttribute("hello-valera"), "hello-valera");
// console.log(menuItem.getAttribute("foo"));

// setTimeout(() => {
//   menuItem.setAttribute("foo", 'aaaaa');
// }, 3000);

/// ---- `dataset` -----

// dataset.cointer == data-counter;
// console.log(menuItem.dataset)
// console.log(menuItem.dataset.counter);

// ---- Node Manipulation -----

const products = document.querySelector(".products");
const productsList = [{ title: "AAAA" }, { title: "BBB" }, { title: "CCC" }];

const createProduct = (product, index) => {
  // -- create
  const div = document.createElement("div");

  // modify
  div.classList.add("product", `product-${index + 1}`);
  div.innerText = product.title;

  return div;
};

// // ADD NEW NODE
// setTimeout(() => {
//   products.append(div);
// }, 3000);

// productsList.forEach((...args) => {
//   products.append(createProduct(...args));
// });

// setTimeout(() => {
//   products.prepend(createProduct({ title: "OOOO" }, 4));
//   products.before(createProduct({ title: "OOOO" }, 4));
//   products.after(createProduct({ title: "OOOO" }, 4));
// }, 3000);

// HW: https://developer.mozilla.org/ru/docs/Web/API/Element/insertAdjacentHTML

// ---- Move Nods ---

const sectionContainer = document.querySelector(".section");
const sectionItemOriginal = sectionContainer.querySelector(".section-item");

// console.log(sectionContainer, "section");
// console.log(sectionItemOriginal, "sectionItem");

// setTimeout(() => {
//   const clone = sectionItemOriginal.cloneNode();
//   console.dir(clone, "clone");
//   console.dir(sectionItemOriginal, "sectionItemOriginal");
//   console.log(clone == sectionItemOriginal);
//   sectionContainer.after(clone);
// }, 4000);

// ------------------ innerHTML vs creteElement --------

const button = document.querySelector("button");

button.onclick = function () {
  // case: innerHTML

  //   let template =
  //     products.innerHTML + '<div class="product product-4">Milk</div>';

  //   products.innerHTML = template;

  // case: createElement

  products.append(createProduct({ title: "UUUU" }, 4));
};

productsList.forEach((...args) => {
  products.append(createProduct(...args));
});

// let template = `${productsList
//   .map(
//     (product, index) =>
//       `<div class="product product-${index + 1}">${product.title}</div>`
//   )
//   .join("")}`;

// products.innerHTML = template;

const nodes = document.querySelectorAll(".product");

nodes.forEach((node) =>
  node.addEventListener("click", () => console.log("---click---"))
);

// ----- browser optimization ----

const box = document.querySelector(".box");

//------ layout

// bad
box.style.width = "100px";
box.style.height = "100px";
box.style.margin = "10px";
box.style.left = "100px";

// good

box.cssText = 'width=100px;height=100px;margin="100";lefth="100px";';

//----- Print

//----

box.classList.add("box-style");

// ----------- Buffer

box.style.color = "red";
box.style.bacgroundColor = "black";
box.style.visibility = "visible";

box.style.width = "100px";

//box.clientWidth\Height, offsetTop/Left, offsetHeight

box.style.height = "100px";
box.style.margin = "10px";
box.style.left = "100px";

const width = box.clientWidth;
const height = box.clientHeight;

//------
let coord = box.offsetLeft; // 100

coord++;

box.style.left = coord + "px"; //101
box.style.top = coord + "px";//101

if (coord > 350) {
  // stopAnimation();
}


//-----------------
// append(), remove()


// ------->> create

// bad
// const ul = document.createElement('ul');

// document.body.prepand(ul);

// [1,2,3].forEach((item) => {
//   const li = document.createElement('li');
//   ul.append(li);
// });


// good

// const ul = document.createElement('ul');

// [1,2,3].forEach((item) => {
//   const li = document.createElement('li');
//   ul.append(li);
// });


// document.body.prepand(ul);


// -----> existing

const products_2 = document.querySelector('.products');


// ----> exmp-1

// products.classList.add('hidden');

// const items_2 = [1,2,3].map((item) => {
//   const div = document.createElement('div');
//   // ul.append(div);
//   return div;
// });


// products.append(...items);

// products.classList.remove('hidden');

// ---- exmp-2

/*
<div class="products"><
 <div class="container">
   <div class="product"></div>
   <div class="product"></div>
  </div>
</div>
*/
// const container = document.createElement('div');
const fragment =  document.createDocumentFragment();

const items_2 = [1,2,3].map((item) => {
  const div = document.createElement('div');
  // fragment.append(div);
  return div;
});


// container.append(...items_2);
// products.append(container);


/*
<div class="products">
   <div class="product"></div>
   <div class="product"></div>
</div>
*/

// fragment.append(...items_2)
// products.append(fragment);



// --- exmp2

const prodcutsClone = products.cloneNode();

const items_3 = [1,2,3].map((item) => {
  const div = document.createElement('div');
  // prodcutsClone.append(div);
  return div;
});

prodcutsClone.append(...items_3);

// products.replaceWith(prodcutsClone);




