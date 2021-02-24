const search = ()=> {
    const view = `
    <div class="buscador__text">Buscar</div>
    <div class="buscador__icon-lupa"></div>`


    const cSearch = document.createElement("div")
    cSearch.classList.add('c-buscador')
    cSearch.innerHTML = view
    

    return (cSearch)
}


export {search}

//  <div class="c-buscador">
//         <div class="buscador__text">Buscar</div>
//         <div class="buscador__icon-lupa"></div>
// </div> 