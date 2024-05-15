import DOMHelper from "../helpers";

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


export default onRenderCategories;