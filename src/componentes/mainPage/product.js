function renderProduct (producto){
  //creo el elemento html 
    const product = document.createElement('div');
    product.classList.add('c-Product');
  //le agrego información
    const view = `  
    <div class="c-Product__info">
        <img class="c-Product__img" src="${producto.imgUrl}" alt="">
        <div class="c-Product__name">${producto.name}</div>
        <div class="c-Product__price">$ ${producto.price}</div>
    </div>
    <div class="c-Product__buttonPay c-button">PAGAR</div>`
    product.innerHTML = view;

    let buttonPay = product.querySelector('.c-Product__buttonPay')

    buttonPay.addEventListener('click',()=>{
      console.log('hello');
    })

    return product
}

export{renderProduct}

{/* <div class="c-Product">
      <div class="c-Product__info">
        <img class="c-Product__img" src="./assets/monello.jpg" alt="">
        <div class="c-Product__name">Alimento para perro Monello x 1.5 Kg</div>
        <div class="c-Product__price">$2.650</div>
      </div>
      <div class="c-Product__button c-button">PAGAR</div>
</div>  */}

{/* <div class="c-Product__buttonUnits">
      
      <div class="buttonUnits plus">
      </div>

      <p class="c-Product__buttonUnitsText">1 Und</p>

      <div class=" buttonUnits minus"></div>

   </div> */}