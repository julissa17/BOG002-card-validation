const shoopingCart = () =>{
    const cShoppingCart = document.createElement('div')
    cShoppingCart.classList.add("shoopingCart")

    const view =` <div class="shoopingCart__header">
                    <div class="l-shoopingCart__title">
                        <h2 class="shoopingCart__title">Mi Canasta</h2>
                        <p class="shoopingCart__emptyCart">Vaciar canasta</p>
                    </div>
                    <div class="l-shoopingCart__close">
                        <i class="far fa-times-circle"></i>
                    </div>
                </div>

                <div class="shoopingCart__products c-scroll">

                    <div class="shoopingCartProduct">
                        <div class="shoopingCartProduct__remove">
                            <i class="fas fa-times"></i>
                        </div>
                        <div class="shoopingCartProduct__img"></div>

                        <div class="l-shoopingCartProduct__info">

                            <div class="l-shoppingCartProduct__infoText">
                                <p class="shoopingCartProduct__name">Alimento para perro Monello x 1.5 Kg</p>
                                <p class="shoopingCartProduct__price">precio unitario: $1.990</p>
                            </div>

                            <div class="l-shoppingCartProduct__infoValue">

                                <div class="l-shoopingCartProduct__selectQuantity">

                                    <div class="c-button shoopingCartProduct__plus">
                                        <i class="fas fa-plus"></i>
                                    </div>
                                    <p class="shoopingCartProduct__quantity"> xx Und</p>

                                    <div class="c-button shoopingCartProduct__minus">
                                        <i class="fas fa-minus"></i>
                                    </div>

                                </div>

                                <div class="shoopingCartProduct__totalValue">$1.990</div>

                            </div>

                        </div>
                    </div>

                    <div class="shoopingCartProduct">
                        <div class="shoopingCartProduct__remove">
                            <i class="fas fa-times"></i>
                        </div>
                        <div class="shoopingCartProduct__img"></div>

                        <div class="l-shoopingCartProduct__info">

                            <div class="l-shoppingCartProduct__infoText">
                                <p class="shoopingCartProduct__name">Alimento para perro Monello x 1.5 Kg</p>
                                <p class="shoopingCartProduct__price">precio unitario: $1.990</p>
                            </div>

                            <div class="l-shoppingCartProduct__infoValue">

                                <div class="l-shoopingCartProduct__selectQuantity">

                                    <div class="c-button shoopingCartProduct__plus">
                                        <i class="fas fa-plus"></i>
                                    </div>
                                    <p class="shoopingCartProduct__quantity"> xx Und</p>

                                    <div class="c-button shoopingCartProduct__minus">
                                        <i class="fas fa-minus"></i>
                                    </div>

                                </div>


                                <div class="shoopingCartProduct__totalValue">$1.990</div>
                            </div>

                        </div>
                    </div>

                    <div class="shoopingCartProduct">
                        <div class="shoopingCartProduct__remove">
                            <i class="fas fa-times"></i>
                        </div>
                        <div class="shoopingCartProduct__img"></div>

                        <div class="l-shoopingCartProduct__info">

                            <div class="l-shoppingCartProduct__infoText">
                                <p class="shoopingCartProduct__name">Alimento para perro Monello x 1.5 Kg</p>
                                <p class="shoopingCartProduct__price">precio unitario: $1.990</p>
                            </div>

                            <div class="l-shoppingCartProduct__infoValue">

                                <div class="l-shoopingCartProduct__selectQuantity">

                                    <div class="c-button shoopingCartProduct__plus">
                                        <i class="fas fa-plus"></i>
                                    </div>
                                    <p class="shoopingCartProduct__quantity"> xx Und</p>

                                    <div class="c-button shoopingCartProduct__minus">
                                        <i class="fas fa-minus"></i>
                                    </div>

                                </div>


                                <div class="shoopingCartProduct__totalValue">$1.990</div>
                            </div>

                        </div>
                    </div>

                    <div class="shoopingCartProduct">
                        <div class="shoopingCartProduct__remove">
                            <i class="fas fa-times"></i>
                        </div>
                        <div class="shoopingCartProduct__img"></div>

                        <div class="l-shoopingCartProduct__info">

                            <div class="l-shoppingCartProduct__infoText">
                                <p class="shoopingCartProduct__name">Alimento para perro Monello x 1.5 Kg</p>
                                <p class="shoopingCartProduct__price">precio unitario: $1.990</p>
                            </div>

                            <div class="l-shoppingCartProduct__infoValue">

                                <div class="l-shoopingCartProduct__selectQuantity">

                                    <div class="c-button shoopingCartProduct__plus">
                                        <i class="fas fa-plus"></i>
                                    </div>
                                    <p class="shoopingCartProduct__quantity"> xx Und</p>

                                    <div class="c-button shoopingCartProduct__minus">
                                        <i class="fas fa-minus"></i>
                                    </div>

                                </div>


                                <div class="shoopingCartProduct__totalValue">$1.990</div>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="shoopingCart__summary">
                    <div class="l-shoopingCart__total">
                        <p class="shoopingCart__summaryTitle">Total de compra:</p>
                        <p id="shoopingCartTotalValue" class="shoopingCart__summaryValue">$ 0000</p>
                    </div>
                    <div class="shoopingCart__buttons">
                        <div id="shoopingCartPayment" class="c-button">FINALIZAR</div>
                        <div id="shoopingCartClose" class="c-button c-button--blue">VOLVER</div>
                    </div>
                </div>`

    cShoppingCart.innerHTML = view

    let buttonClose = cShoppingCart.querySelector(".l-shoopingCart__close")
    buttonClose.addEventListener("click", ()=>{
        cShoppingCart.classList.remove("shoopingCart--visible")
    })


    return cShoppingCart
}

export{shoopingCart}

//TODO crear componente del contenedor de productos
//TODO descargar los iconos que uso
//TODO agregar cursor pointer en los que necesite