//categorias debe ser una lista con cada categoria
    // categoria == objeto, que tiene nombre, img, listado de productos ==listado
        //productos == objeto, nombre, img, precio, units, stock
// productos destacados, son una lista de objetos

//creo objeto categoria
class Categoria {
    constructor (nombre, img, listadoProductos){
        this.name = nombre;
        this.imgUrl = img;
        this.listProducts = listadoProductos
    }
}
//creo objeto categorias 
class Categorias{
    constructor() {
        this.listCategories = []
    }

    addCategory(name, imgUrl, products){
        const category = new Categoria(name, imgUrl, products)
        this.listCategories.push(category)
    }

    //remove
    //find

}

//creo la categoria de productos
const dataCategories = new Categorias();
dataCategories.addCategory('Alimentos', './assets/Categorias/categoria__img-purina.png', ["hello", "popo","enojada"])
dataCategories.addCategory('Aseo', './assets/Categorias/categoria__img-aseo.png',["hello", "popo","enojada"])
dataCategories.addCategory('Juguetes','./assets/Categorias/categoria__img-juguetes.jpg', ["hello", "popo","enojada"])
dataCategories.addCategory('Medicamentos','./assets/Categorias/categoria__img-medicamentos.jpg',["hello", "popo","enojada"])
dataCategories.addCategory('Snacks','./assets/Categorias/categoria__img-snacks.jpg', ["hello", "popo","enojada"])
dataCategories.addCategory('Accesorios', './assets/Categorias/categoria__img-accesorios.jpg', ["hello", "popo","enojada"])
dataCategories.addCategory('Ropa', './assets/Categorias/categoria__img-ropa.jpg', ["hello", "popo","enojada"])
dataCategories.addCategory('Muebles', './assets/Categorias/categoria__img-muebles.jfif', ["hello", "popo","enojada"])
dataCategories.addCategory('Muebles', './assets/Categorias/categoria__img-muebles.jfif', ["hello", "popo","enojada"])

//creo la categoria de productos destacados
const dataFeaturedProducts = new Categorias();
dataFeaturedProducts.addCategory('Mordedor','./assets/monello.jpg')
dataFeaturedProducts.addCategory('Mordedor','./assets/monello.jpg')
dataFeaturedProducts.addCategory('Mordedor','./assets/monello.jpg')
dataFeaturedProducts.addCategory('Mordedor','./assets/monello.jpg')
dataFeaturedProducts.addCategory('Mordedor','./assets/monello.jpg')
dataFeaturedProducts.addCategory('Mordedor','./assets/monello.jpg')
dataFeaturedProducts.addCategory('Mordedor','./assets/monello.jpg')
dataFeaturedProducts.addCategory('Mordedor','./assets/monello.jpg')
dataFeaturedProducts.addCategory('Mordedor','./assets/monello.jpg')


export {dataCategories, dataFeaturedProducts}

//TODO crear el objeto de producto
//TODO crear la funcion que crea los objetos






