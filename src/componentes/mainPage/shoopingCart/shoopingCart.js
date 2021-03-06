import { cartProduct } from "./ProductCart.js";
import { kanu } from "../../../database/data.js";

const shoopingCart = () => {
  //creo el elemento html del carrito
  const cShoppingCart = document.createElement("div");
  cShoppingCart.classList.add("shoopingCart");

  const view = `   <div class="shoopingCart__header">
                        <div class="l-shoopingCart__title">
                            <h2 class="shoopingCart__title">Mi Canasta</h2>
                            <p class="shoopingCart__emptyCart">Vaciar canasta</p>
                        </div>
                        <div class="l-shoopingCart__close icon"></div>
                    </div>

                    <div class="shoopingCart__products c-scroll"></div>
                    
                    <div class="shoopingCart__summary">
                        <div class="l-shoopingCart__total">
                            <p class="shoopingCart__summaryTitle">Total de compra:</p>
                            <p id="shoopingCartTotalValue" class="shoopingCart__summaryValue">$ 0000</p>
                        </div>
                        <div class="shoopingCart__buttons">
                            <div id="shoopingCartPayment" class="c-button buttonCart">FINALIZAR</div>
                            <div id="shoopingCartClose" class="c-button c-button--blue buttonCart">VOLVER</div>
                        </div>
                    </div>`;

  cShoppingCart.innerHTML = view;

  //vacio la canasta
  let containerCartProducts = cShoppingCart.querySelector(
    ".shoopingCart__products"
  );
  let emptyCart = cShoppingCart.querySelector(".shoopingCart__emptyCart");
  emptyCart.addEventListener("click", () => {
    while (containerCartProducts.hasChildNodes()) {
      containerCartProducts.removeChild(containerCartProducts.firstChild);
    }
  });

  //obtengo el boton close, para ocultar-visualizar el carrito
  let buttonClose = cShoppingCart.querySelector(".l-shoopingCart__close");
  buttonClose.addEventListener("click", () => {
    cShoppingCart.classList.remove("shoopingCart--visible");
    document.body.style = "";
  });

  //obtengo el botón volver me retorna a la página principal
  let buttonReturn = cShoppingCart.querySelector("#shoopingCartClose");
  buttonReturn.addEventListener("click", () => {
    cShoppingCart.classList.remove("shoopingCart--visible");
    document.body.style = "";
  });

  //direcciona a la pagina de pagos
  let buttonPayment = cShoppingCart.querySelector("#shoopingCartPayment");
  buttonPayment.addEventListener("click", () => {
    window.location = "./payPage.html";
  });
  return cShoppingCart;
};

function rendCartProducts() {
  let containerCartProducts = document.querySelector(".shoopingCart__products");


  if (containerCartProducts.hasChildNodes() == true){
    while(containerCartProducts.hasChildNodes()==true){
      containerCartProducts.childNodes.forEach(product=>{
        containerCartProducts.removeChild(product)
      })}

     kanu.cart.productLists.forEach((Product) => {
    containerCartProducts.appendChild(cartProduct(Product));
      });
  

  }else{
    console.log('no se que putas pasa');
    kanu.cart.productLists.forEach((Product) => {
      containerCartProducts.appendChild(cartProduct(Product));
    });
  }


  // kanu.cart.productLists.forEach((Product) => {
  //   containerCartProducts.appendChild(cartProduct(Product));
  // });
  

  return containerCartProducts;
}

export { shoopingCart, rendCartProducts };
