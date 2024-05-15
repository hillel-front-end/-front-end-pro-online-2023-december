import makeProduct from './product.js';

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
};

export default onRenderProductsList;