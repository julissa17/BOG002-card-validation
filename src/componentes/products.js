const productos = ()=>{
    const view =`
    <div class="productos__title">Nuestros productos</div>
    <div class="productos__container"></div>`

    let cProductos = document.createElement("section")
    cProductos.classList.add("productos")
    cProductos.insertAdjacentHTML("afterbegin",view)

    
return cProductos
}



export{productos}



//  <div class="productos">

//     <div class="productos__title">Nuestros productos</div>
    
//     <div class="productos__container">
//        <div class="c-Product">
//             <img class="c-Product__img" src="./assets/monello.jpg" alt="">
//             <div class="c-Product__name">Alimento para perro Monello x 1.5 Kg</div>
//             <div class="c-Product__price">$2.650</div>
//             <div class="c-Product__button c-button">PAGAR</div>
//         </div>
//     </div>
// </div>