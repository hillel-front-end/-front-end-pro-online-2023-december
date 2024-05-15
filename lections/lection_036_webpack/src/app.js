import onRenderCategories from './parts/categories';
import onRenderProductsList from "./parts/products";
import DOMHelper, { unusedFormatter } from "./helpers";
import _ from "lodash";
import './main.scss';

console.log(_, '_lodash1233');

// unusedFormatter();


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
    });
  });
}

if (process.env.NODE_ENV === "development") {
  console.log('HELLO FUNC FOR DEVELOPMENT')
}

function main() {
  initStoreModule({
    meta: ["laptop", "phone", "tablet"],
    data: {
      laptop: [
        { id: 1, brand: "Macbook 123" },
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


async function fetchPayload() {
  const payload = await Promise.resolve(JSON.stringify({ a: 1, b: 2, c: 3 }));
  console.log(payload, 'payload');
}

fetchPayload();