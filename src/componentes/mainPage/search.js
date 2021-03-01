const search = ()=> {
    const view = `
    <div class="buscador__text">Buscar</div>
    <div class="buscador__icon-lupa"></div>`


    const cSearch = document.createElement("div")
    cSearch.classList.add('c-buscador')
    cSearch.insertAdjacentHTML("afterbegin", view)
    

    return (cSearch)
}


export {search}

//  <div class="c-buscador">
//         <div class="buscador__text">Buscar</div>
//         <div class="buscador__icon-lupa"></div>
// </div> 

//FIXME debo cambiar buscar por input y hacer la función que ingrese en el header