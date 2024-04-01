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

// ----- optimization ----


