//categorias debe ser una lista con cada categoria
    // categoria == objeto, que tiene nombre, img, listado de productos ==listado
        //productos == objeto, nombre, img, precio, units, stock
// productos destacados, lista de objetos con los productos con mayor número de unidades vendidas


//creo el componente producto
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
// kanu.addProduct("alimento","Alimento para perro Monello x 1.5 Kg","./assets/monello.jpg", 3500, 10,0 )
kanu.addProduct("alimento","Monello x 1.5kg","./assets/monello.jpg", 3500, 10,0 )
kanu.addProduct("alimento","Monello x 3kg","./assets/monello.jpg", 7500, 10,1 )
kanu.addProduct("alimento","Ringo","./assets/monello.jpg", 3800, 10,2 )
kanu.addProduct("alimento","Chunky","./assets/monello.jpg", 4500, 10,5 )
kanu.addProduct("alimento","DogChow","./assets/monello.jpg", 2200, 10,10 )
kanu.addProduct("alimento","RoyalCan","./assets/monello.jpg", 6500, 10,8 )
kanu.addProduct("alimento","Chunky_2","./assets/monello.jpg", 4500, 10,5 )
kanu.addProduct("alimento","DogChow_2","./assets/monello.jpg", 2200, 10,10 )
kanu.addProduct("alimento","RoyalCan_2","./assets/monello.jpg", 6500, 10,8 )
kanu.addProduct("alimento","RoyalCan_3","./assets/monello.jpg", 6500, 10,8 )


kanu.addCategory('aseo', './assets/Categorias/categoria__img-aseo.png')
kanu.addProduct('aseo',"Shampoo - Cachorros","./assets/shampoo.jpg", 3700, 10,2 )
kanu.addProduct('aseo',"Shampoo - Adultos","./assets/shampoo.jpg", 5400, 10,3 )
kanu.addProduct('aseo',"Shampoo - pulgas","./assets/shampoo.jpg", 2800, 10,4 )
kanu.addProduct('aseo',"Shampoo - pulgas","./assets/shampoo.jpg", 1300, 10,5 )
kanu.addProduct('aseo',"Shampoo - pulgas","./assets/shampoo.jpg", 12500, 10,0 )
kanu.addProduct('aseo',"Shampoo - pulgas","./assets/shampoo.jpg", 6500, 10,10 )

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



//FIXME esto no debe ser un calculo abierto, debe ser una funcion
//si suponemos que la red esta conectada a una base de datos en internet, los productos vendidos
//cambiaran en tiempo real, osea esto debe recalcularse cada que yo lo necesite...


//quiero obtener el producto de cada categoría que tenga el mayor número de unidades vendidas
let bestProducts = []

kanu.categories.forEach (categoria =>{

    let listaProductos = categoria.listProducts

    let largerProduct = listaProductos[0]

    listaProductos.forEach(product=>{
        largerProduct = product.numberSale > largerProduct.numberSale ? product : largerProduct   
    })

    bestProducts.push({categoria:categoria.name,producto:largerProduct})
    
})


export {kanu, bestProducts}





