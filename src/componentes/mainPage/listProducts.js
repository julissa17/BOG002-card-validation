import {renderProduct} from '../product.js'


// creo el contenedor productos
function listProducts() {
  let cProductos = document.createElement("section")
  cProductos.classList.add("productos")

  const view = `  <div class="productos__title">Nuestros productos</div>
                    <div class="productos__container"></div>`

  cProductos.insertAdjacentHTML("afterbegin", view)


    return cProductos
}



function renderProducts(categoria){

    //eliminar los que ya existan
    let containerProduct = document.querySelector(".productos__container")
    console.log(containerProduct);
    containerProduct.innerHTML = ''
  
    categoria.listProducts.length == 0 ? containerProduct.innerHTML = '<h1 style="font-size:4rem"> 404 NOT FOUND </h1>' : ''
  
    categoria.listProducts.forEach(producto =>{
      let product = renderProduct(producto)
  
      containerProduct.appendChild(product)
  
    })
   
  
  }
  

export{listProducts,renderProducts}


//  <div class="productos">
//     <div class="productos__title">Nuestros productos</div>
//     <div class="productos__container"></div>
// </div>