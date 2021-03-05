import {header} from './componentes/mainPage/header.js';
import {footer} from './componentes/mainPage/footer.js';
import {productCategories} from './componentes/mainPage/productCategories.js'
import {listProducts} from './componentes/mainPage/listProducts.js'
import {featuredProducts} from './componentes/mainPage/featuredProducts.js'
import {shoopingCart} from './componentes/mainPage/shoopingCart/shoopingCart.js'
import {search } from './componentes/mainPage/search.js';


document.body.appendChild(header())
document.body.appendChild(search())
document.body.appendChild(productCategories())
document.body.appendChild(listProducts())
document.body.appendChild(featuredProducts())
document.body.appendChild(shoopingCart())
document.body.appendChild(footer())



