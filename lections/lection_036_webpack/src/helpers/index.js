export default class DOMHelper {
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

export const formatter = new Intl.NumberFormat("uk-UA", {
  style: "currency",
  currency: "UAH",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});


export const unusedFormatter = () => {
  console.log('-----unusedFormatter----');
}