class DOMHelper {
  static makeNode({
    name = "",
    className = "",
    dataAttrs = {},
    children = null,
    event = "",
    handler = null,
  }) {
    const node = document.createElement(name);

    className && node.classList.add(className);

    Object.keys(dataAttrs).forEach(
      (key) => (node.dataset[key] = dataAttrs[key])
    );
    event && handler && node.addEventListener(event, handler);

    if (children) {
      Array.isArray(children)
        ? node.append(...children)
        : node.append(children);
    }

    return node;
  }

  static clear(node) {
    while (node.firstChild) {
      node.firstChild.remove();
    }
  }
}

//  -------- Categories List Logic --------
const makeCategoriesList = (model) => {
  return model.map((category) =>
    DOMHelper.makeNode({
      name: "li",
      className: "category",
      dataAttrs: { category, foo: 123 },
      children: category,
    })
  );
};

const onRenderCategories = (container, model, handler) => {
  container.append(...makeCategoriesList(model));

  container.onclick = ({ target }) => {
    const category = target.dataset.category;

    if (category) {
      handler(category);
    }
  };
};

//  -------- Products List Logic ------------
const makeProductShortInfo = (brand, price) => {
  const titleNode = DOMHelper.makeNode({
    name: "h2",
    className: "product__title",
    children: brand,
  });

  const priceNode = DOMHelper.makeNode({
    name: "div",
    className: "product__price",
    children: "100 UAH",
  });

  return { title: titleNode, price: priceNode };
};

const makeButtonControl = (buttonsTitle) => {
  return buttonsTitle.map((title) =>
    DOMHelper.makeNode({ name: "button", children: title })
  );
};

const makeProduct = (product) => {
  const { title, price } = makeProductShortInfo(product.brand, "100 UAH");
  const buttons = DOMHelper.makeNode({
    name: "div",
    children: [...makeButtonControl(["buy", "show info"])],
  });

  return DOMHelper.makeNode({
    name: "div",
    className: "product",
    dataAttrs: { id: product.id },
    children: [title, price, buttons],
  });
};

const makeProductsList = (model) => {
  return model.map((product) => makeProduct(product));
};

const onRenderProductsList = (container, model, handler) => {
  container.append(...makeProductsList(model));

  container.onclick = ({ target }) => {
    const targetProduct = target.closest(".product");
    const id = targetProduct.dataset.id;
    id && handler(id);
  };

  //   container.querySelectorAll("button").forEach((button) => {
  //     button.onclick = function (event) {
  //       console.log("---click---");
  //       event.stopPropagation(); // << ---------- !!
  //     };
  //   });
};

//  -------- Products Detail Logic ------------
const onRenderProductDetail = () => {};

function initStoreModule(store) {
  const categories = document.querySelector(".categories");
  const productsList = document.querySelector(".products-list");
  const productDetail = document.querySelector(".product-detail");

  onRenderCategories(categories, store.meta, (category) => {
    DOMHelper.clear(productsList);

    onRenderProductsList(productsList, store.data[category], (productId) => {
      const product = store.data[category].find(
        (product) => product.id == productId
      );

      onRenderProductDetail(productDetail, product, () => {}); // HW
    });
  });
}

function main() {
  initStoreModule({
    meta: ["laptop", "phone", "tablet"],
    data: {
      laptop: [
        { id: 1, brand: "Macbook" },
        { id: 2, brand: "Samsund" },
        { id: 3, brand: "DELL" },
      ],
      phone: [
        { id: 4, brand: "Apple" },
        { id: 5, brand: "Samsund" },
        { id: 6, brand: "Google Nexus" },
      ],
      tablet: [
        { id: 7, brand: "Ipad" },
        { id: 8, brand: "YoGa" },
        { id: 9, brand: "Lenovo" },
      ],
    },
  });
}

main();
