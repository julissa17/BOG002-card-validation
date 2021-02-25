import {dataCategories} from "../database/data.js";

const productCategories = ()=>{
    const view = `
    <div class="c-carrousel__title">Nuestras Categorías</div>
    <div class="c-carrousel__items"></div>`

    const categories = document.createElement("section")
    categories.classList.add("c-carrousel")
    categories.insertAdjacentHTML("afterbegin",view)

    const categoriesCarrousel = categories.querySelector(".c-carrousel__items")
    
    dataCategories.forEach(categoria => {
        let cCategy = document.createElement("div")
        cCategy.classList.add("c-categoria")
       
        const viewCategory = `
        <img class="c-categoria__img" src="${categoria.img}" alt="">
        <div class="c-categoria__title">${categoria.name}</div>
        `
        cCategy.insertAdjacentHTML("afterbegin", viewCategory) 

        categoriesCarrousel.appendChild(cCategy)
   
    });

    return categories
}


export {productCategories}


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
