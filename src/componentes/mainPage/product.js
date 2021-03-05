import { kanu } from "../../database/data.js";

function renderProduct(producto) {
  //creo el elemento html
  const product = document.createElement("div");
  product.classList.add("c-Product");
  //le agrego información
  const view = `  
    <div class="c-Product__info">
        <img class="c-Product__img" src="${producto.imgUrl}" alt="">
        <div class="c-Product__name">${producto.name}</div>
        <div class="c-Product__price">$ ${producto.price}</div>
    </div>
    <div class="c-Product__buttonPay c-button">PAGAR</div>

    <div class="c-Product__buttonUnits c-Product__buttonUnits--hidden">
          <div class="buttonUnits plus"></div>
          <p class="c-Product__buttonUnitsText"> Und</p>
          <div class=" buttonUnits minus"></div>
      </div>`;
  product.innerHTML = view;

  let buttonPay = product.querySelector(".c-Product__buttonPay");
  let buttonQuantity = product.querySelector(".c-Product__buttonUnits--hidden");
  let buttonQuantityPlus = product.querySelector(".plus");
  let buttonQuantityMinus = product.querySelector(".minus");

  buttonPay.addEventListener("click", () => {
    console.log("selecciono algún producto");
    buttonPay.classList.toggle("c-Product__buttonPay--hidden");
    buttonQuantity.classList.toggle("c-Product__buttonUnits--hidden");
    addQuantity(producto);
  });

  buttonQuantityPlus.addEventListener("click", () => {
    addQuantity(producto, buttonPay, buttonQuantity);
  });

  buttonQuantityMinus.addEventListener("click", () => {
    minusQuantity(producto);
  });

  return product;
}

export { renderProduct };

{
  /* <div class="c-Product">
      <div class="c-Product__info">
        <img class="c-Product__img" src="./assets/monello.jpg" alt="">
        <div class="c-Product__name">Alimento para perro Monello x 1.5 Kg</div>
        <div class="c-Product__price">$2.650</div>
      </div>
      <div class="c-Product__button c-button">PAGAR</div>
</div>  */
}

{
  /* <div class="c-Product__buttonUnits">
      
      <div class="buttonUnits plus">
      </div>

      <p class="c-Product__buttonUnitsText">1 Und</p>

      <div class=" buttonUnits minus"></div>

   </div> */
}

//product -> type (product)
function addQuantity(product) {
  //return -> type (productCart)
  const productCart = kanu.cart.addProductToCart(product);

  // encontrar
  //product => productos de categorias
  // productCart => cart

  // aumentar sus unidades en

  //actualizarlo
  console.log(kanu.cart);
}

//aplica para
function minusQuantity(product) {
  const productCart = kanu.cart.removeProductToCart(product);

  //match by data-id

  //match product in l-container-products

  //match productCart in l-container-cart-product
  if (productCart.units == 0) {
    //matchProductInProducts -- > debe cambiar a el otro boton
    //matchProductInCart      --> se debe eliminar
  } else {
    //matchProductInProducts    --> debe aumental la unidad
    //matchProductInCart        --> debe aumentar la unidad
  }

  //actualizarlo visualmente
  console.log(kanu.cart);
}
