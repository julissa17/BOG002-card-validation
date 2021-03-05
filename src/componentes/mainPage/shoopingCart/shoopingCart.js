const shoopingCart = () => {
  //creo el elemento html del carrito
  const cShoppingCart = document.createElement("div");
  cShoppingCart.classList.add("shoopingCart");

  const view = `   <div class="shoopingCart__header">
                        <div class="l-shoopingCart__title">
                            <h2 class="shoopingCart__title">Mi Canasta</h2>
                            <p class="shoopingCart__emptyCart">Vaciar canasta</p>
                        </div>
                        <div class="l-shoopingCart__close">
                            <i class="far fa-times-circle"></i>
                        </div>
                    </div>

                    <div class="shoopingCart__products c-scroll"></div>
                    
                    <div class="shoopingCart__summary">
                        <div class="l-shoopingCart__total">
                            <p class="shoopingCart__summaryTitle">Total de compra:</p>
                            <p id="shoopingCartTotalValue" class="shoopingCart__summaryValue">$ 0000</p>
                        </div>
                        <div class="shoopingCart__buttons">
                            <div id="shoopingCartPayment" class="c-button">FINALIZAR</div>
                            <div id="shoopingCartClose" class="c-button c-button--blue">VOLVER</div>
                        </div>
                    </div>`;

  cShoppingCart.innerHTML = view;

  //obtengo el boton close, para ocultar-visualizar el carrito
  let buttonClose = cShoppingCart.querySelector(".l-shoopingCart__close");
  buttonClose.addEventListener("click", () => {
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

export { shoopingCart };

//TODO crear componente del contenedor de productos
//TODO descargar los iconos que uso
//TODO agregar cursor pointer en los que necesite
