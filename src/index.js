import validator from './validator.js';
import {header} from './componentes/mainPage/header.js';
import {footer} from './componentes/mainPage/footer.js';
import {search} from './componentes/mainPage/search.js'
import {productCategories} from './componentes/mainPage/productCategories.js'
import {listProducts} from './componentes/mainPage/listProducts.js'
import {featuredProducts} from './componentes/mainPage/featuredProducts.js'
import {shoopingCart} from './componentes/mainPage/shoopingCart/shoopingCart.js'



let body = document.querySelector("body")
body.appendChild(header())
body.appendChild(search())
body.appendChild(productCategories())

body.appendChild(listProducts())
body.appendChild(featuredProducts())
body.appendChild(footer())

body.appendChild(shoopingCart())





//con los productos de la primer categoria ya cargados