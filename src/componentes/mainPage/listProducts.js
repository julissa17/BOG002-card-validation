import { kanu } from "../../database/data.js";
import { renderProduct } from "./product.js";

// creo el contenedor productos
function listProducts() {
  let cProducts = document.createElement("section");
  cProducts.classList.add("productos");

  const view = `  <div class="productos__title">Nuestros productos</div>
                  <div class="productos__container"></div>`;

  cProducts.insertAdjacentHTML("afterbegin", view);

  renderProducts(
    kanu.categories[0],
    cProducts.querySelector(".productos__container")
  );

  return cProducts;
}

function renderProducts(categoria, products) {
  //eliminar los que ya existan

  let containerProduct =
    typeof products == "object"
      ? products
      : document.querySelector(".productos__container");
  // let containerProduct = document.querySelector(".productos__container")
  containerProduct.innerHTML = "";

  categoria.listProducts.length == 0
    ? (containerProduct.innerHTML =
        '<img class ="notFound" src="./assets/404.jpg" alt="">')
    : "";

  categoria.listProducts.forEach((producto) => {
    let product = renderProduct(producto);

    containerProduct.appendChild(product);
  });
}

export { listProducts, renderProducts };

//  <div class="productos">
//     <div class="productos__title">Nuestros productos</div>
//     <div class="productos__container"></div>
// </div>
