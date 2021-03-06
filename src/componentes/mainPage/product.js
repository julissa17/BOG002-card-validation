import { kanu } from "../../database/data.js";

//product -> type (product)
function renderProduct(producto) {
  //creo el elemento html
  const htmlProduct = document.createElement("div");
  htmlProduct.classList.add("c-Product");
  htmlProduct.setAttribute("data-id", producto.id);

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
  htmlProduct.innerHTML = view;

  //elementos para los botones
  let buttonPay = htmlProduct.querySelector(".c-Product__buttonPay");
  let buttonQuantity = htmlProduct.querySelector(
    ".c-Product__buttonUnits--hidden"
  );

  //elementos para sumar cantidades
  let buttonQuantityPlus = htmlProduct.querySelector(".plus");
  let buttonQuantityMinus = htmlProduct.querySelector(".minus");

  buttonPay.addEventListener("click", () => {
    addQuantity(producto);
    renderButtonProduct(htmlProduct);
  });

  buttonQuantityPlus.addEventListener("click", () => {
    addQuantity(producto);
  });

  buttonQuantityMinus.addEventListener("click", () => {
    minusQuantity(producto);
  });

  return htmlProduct;
}

//product -> type (product)
function addQuantity(product) {
  //return -> type (productCart)
  const productCart = kanu.cart.addProductToCart(product);
  //HTMLProduct => HTML-CONTAINER-PRODUCTS
  const htmlProduct = document.querySelector([`div[data-id="${product.id}"]`]);
  //HTMLCardProduct => html-container card products
  const htmlCardProduct = document.querySelector([`div[data-idCart="${product.id}"]`])

  if (htmlProduct) {
    htmlProduct.querySelector( ".c-Product__buttonUnitsText").textContent = `${productCart.units} Und.`;
  }

  if(htmlCardProduct){
    htmlCardProduct.querySelector('.shoopingCartProduct__quantity').textContent = `${productCart.units} Und.`
  }
}

//product -> type (product)
function minusQuantity(product) {
  const productCart = kanu.cart.removeProductToCart(product);

  const htmlProduct = document.querySelector([`div[data-id="${product.id}"]`]);
  const htmlCardProduct = document.querySelector([`div[data-idCart = "${product.id}"]`])

  //match productCart in l-container-cart-product
  if (productCart.units == 0) {
    //matchProductInProducts -- > debe cambiar a el otro boton
    renderButtonProduct(htmlProduct);
    //matchProductInCart      --> se debe eliminar

  } else {
    //matchProductInProducts    --> debe aumental la unidad
    htmlProduct.querySelector(".c-Product__buttonUnitsText").textContent = `${productCart.units} Und.`;
    //matchProductInCart        --> debe aumentar la unidad
    htmlCardProduct.querySelector('.shoopingCartProduct__quantity').textContent = `${productCart.units} Und.`
    
  }
}





export { renderProduct, addQuantity, minusQuantity };

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



function renderButtonProduct(htmlProduct) {
  let buttonPay = htmlProduct.querySelector(".c-Product__buttonPay");
  let buttonQuantity = htmlProduct.querySelector(".c-Product__buttonUnits");

  buttonPay.classList.toggle("c-Product__buttonPay--hidden");
  buttonQuantity.classList.toggle("c-Product__buttonUnits--hidden");
}
