//categorias debe ser una lista con cada categoria
    // categoria == objeto, que tiene nombre, img, listado de productos ==listado
        //productos == objeto, nombre, img, precio, units, stock
// productos destacados, son una lista de objetos

//TODO crear el objeto de producto
//TODO crear la funcion que crea los objetos

class Product {
    constructor (nombre, img, precio, stock, numeroVentas){
        this.name = nombre,
        this.imgUrl = img,
        this.price =precio,
        this.stock = stock,
        this.numberSale = numeroVentas || 0
    }
}

//creo objeto categoria
class Categoria {
    constructor (nombre, img){
        this.name = nombre;
        this.imgUrl = img;
        this.listProducts = []
    }

}

//creo objeto categorias 
class Store{
    constructor() {
        this.categories = []
    }

    addCategory(name, imgUrl){
        const category = new Categoria(name, imgUrl)
        this.categories.push(category)
    }

    addProduct (name,nombreProduct, imgProduct, precioProduct, stockProduct, numeroVentasProduct){
        const product = new Product(nombreProduct, imgProduct, precioProduct, stockProduct, numeroVentasProduct)

        this.categories.forEach(element=>{
            if (element.name == name){
                element.listProducts.push(product)
            }
        })
    }
   
    //remove

    //find

}



const kanu = new Store()
//agrego una categoria que a su vez le agrego los productos
kanu.addCategory("alimento", "./assets/monello.jpg")
kanu.addProduct("alimento","Alimento para perro Monello x 1.5 Kg","./assets/monello.jpg", 3500, 10,0 )
kanu.addProduct("alimento","Monello","./assets/monello.jpg", 3500, 10,0 )
kanu.addProduct("alimento","Monello","./assets/monello.jpg", 3500, 10,0 )
kanu.addProduct("alimento","Monello","./assets/monello.jpg", 3500, 10,0 )
kanu.addProduct("alimento","Monello","./assets/monello.jpg", 3500, 10,0 )
kanu.addProduct("alimento","Monello","./assets/monello.jpg", 3500, 10,0 )


kanu.addCategory('aseo', './assets/Categorias/categoria__img-aseo.png')
kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )

kanu.addCategory('juguetes','./assets/Categorias/categoria__img-juguetes.jpg')
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )

kanu.addCategory('medicamentos','./assets/Categorias/categoria__img-medicamentos.jpg');
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )

kanu.addCategory('snacks','./assets/Categorias/categoria__img-snacks.jpg')
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )

kanu.addCategory('accesorios', './assets/Categorias/categoria__img-accesorios.jpg')
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )

kanu.addCategory('muebles', './assets/Categorias/categoria__img-muebles.jfif')
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )

kanu.addCategory('muebles', './assets/Categorias/categoria__img-muebles.jfif')
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )

kanu.addCategory('juguetes','./assets/Categorias/categoria__img-juguetes.jpg')
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )
// kanu.addProduct('aseo',"Monello","./assets/monello.jpg", 3500, 10,0 )


export {kanu}







