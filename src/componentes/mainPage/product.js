function renderProduct (producto){
    const view = `
    <img class="c-Product__img" src="${producto.imgUrl}" alt="">
    <div class="c-Product__name">${producto.name}</div>
    <div class="c-Product__price">$ ${producto.price}</div>
    <div class="c-Product__button c-button">PAGAR</div>`

    const product = document.createElement('div');
    product.classList.add('c-Product');
    product.innerHTML = view;

    return product
}

export{renderProduct}

/* <div class="c-Product">
//             <img class="c-Product__img" src="./assets/monello.jpg" alt="">
//             <div class="c-Product__name">Alimento para perro Monello x 1.5 Kg</div>
//             <div class="c-Product__price">$2.650</div>
//             <div class="c-Product__button c-button">PAGAR</div>
</div> */