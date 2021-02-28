import {dataCategories} from "../database/data.js";

const productCategories = ()=>{

    const view = `
    <div class="c-carrousel__title">Nuestras Categorías</div>
    <div class="c-carrousel__items"></div>`

    const categories = document.createElement("section")
    categories.classList.add("c-carrousel")
    categories.insertAdjacentHTML("afterbegin",view)

    const categoriesCarrousel = categories.querySelector(".c-carrousel__items")
    
    dataCategories.listCategories.forEach(categoria=>{
      let cCategory = document.createElement("div")
        cCategory.classList.add("c-categoria")

       
        const viewCategory = `<img class="c-categoria__img" src="${categoria.imgUrl}" alt="">
                              <div class="c-categoria__title">${categoria.name}</div>`

        cCategory.insertAdjacentHTML("afterbegin", viewCategory) 


        categoriesCarrousel.appendChild(cCategory)


        //evento crear los productos correspondientes --- component o funcion???
        
    })


    return categories
}


export {productCategories}


function renderProducts(categoria){

  categoria.forEach(producto=>{
    //crear un componente producto e insertarlo ??? donde


  })
}



const product = (producto)=>{
  const div = createImageBitmap

  //añadir funcionalidades....


  
}

//voy a borrar todos los productos para volver a renderizarlos?? 

//

{/* <section class="c-carrousel">
        <div class="c-carrousel__title">Nuestras Categorías</div>
        <div class="c-carrousel__items">
          <div class="c-categoria">
            <img class="c-categoria__img" src="./assets/categoria__img-purina.png" alt="">
            <div class="c-categoria__title">Alimento seco</div>
          </div>

        </div>
      </section> 

<div class="c-categoria">
    <img class="c-categoria__img" src="./assets/categoria__img-purina.png" alt="">
    <div class="c-categoria__title">Alimento seco</div>
</div>  */}
