//categorias debe ser una lista con cada categoria
    // categoria == objeto, que tiene nombre, img, listado de productos ==listado
        //productos == objeto, nombre, img, precio, units, stock
// productos destacados, son una lista de objetos

let dataCategories = [
    {
        name: 'Alimentos',
        img: "./assets/monello.jpg",
        productList : ["hola", "chao", "piri", "popo"]
    },
    {
        name: 'Snacks',
        img: "./assets/monello.jpg",
        productList : ["hola", "chao", "piri", "popo"]
    },
    {
        name: 'Juguetes',
        img: "./assets/monello.jpg",
        productList : ["hola", "chao", "piri", "popo"]
    },
    {
        name: 'Medicamentos',
        img: "./assets/monello.jpg",
        productList : ["hola", "chao", "piri", "popo"]
    },
]

let dataFeaturedProducts = [
    {
        name: 'Mordedor',
        img: "./assets/monello.jpg",
    },
    {
        name: 'Cama premium',
        img: "./assets/monello.jpg",
    },
    {
        name: 'Bravecto gatos',
        img: "./assets/monello.jpg",
    },
]


export {dataCategories, dataFeaturedProducts}

