import DOMHelper, { formatter } from "../helpers";

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
    children: price
  });

  return { title: titleNode, price: priceNode };
};

const makeButtonControl = (buttonsTitle) => {
  return buttonsTitle.map((title) =>
      DOMHelper.makeNode({ name: "button", children: title })
  );
};

const makeProduct = (product) => {
  const { title, price } = makeProductShortInfo(product.brand, formatter.format(134234));
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

export default makeProduct;