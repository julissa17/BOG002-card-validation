const cartProduct = () => {
  const shoopingCartProduct = document.createElement("div");
  shoopingCartProduct.classList.add("shoopingCartProduct");

  const view = `    <div class="shoopingCartProduct__remove icon"></div>
                    <div class="shoopingCartProduct__img"></div>

                    <div class="l-shoopingCartProduct__info">
                        <div class="l-shoppingCartProduct__infoText">
                        <p class="shoopingCartProduct__name">Alimento para perro Monello x 1.5 Kg</p>
                        <p class="shoopingCartProduct__price">Precio unitario: $1.990</p>
                        </div>

                        <div class="l-shoppingCartProduct__infoValue">
                            <div class="l-shoopingCartProduct__selectQuantity">
                                <div class="c-button shoopingCartProduct__plus plus"></div>
                                <p class="shoopingCartProduct__quantity"> xx Und</p>
                                <div class="c-button shoopingCartProduct__minus minus"></div>
                            </div>
                            <div class="shoopingCartProduct__totalValue">$1.990</div>
                        </div>
                    </div>
    `;
};

{/* <div class="shoopingCartProduct">
  <div class="shoopingCartProduct__remove icon"></div>
  <div class="shoopingCartProduct__img"></div>

  <div class="l-shoopingCartProduct__info">
    <div class="l-shoppingCartProduct__infoText">
      <p class="shoopingCartProduct__name">Alimento para perro Monello x 1.5 Kg</p>
      <p class="shoopingCartProduct__price">Precio unitario: $1.990</p>
    </div>

    <div class="l-shoppingCartProduct__infoValue">
        <div class="l-shoopingCartProduct__selectQuantity">
            <div class="c-button shoopingCartProduct__plus plus"></div>
            <p class="shoopingCartProduct__quantity"> xx Und</p>
            <div class="c-button shoopingCartProduct__minus minus"></div>
        </div>
        <div class="shoopingCartProduct__totalValue">$1.990</div>
    </div>
  </div>
</div>; */}
