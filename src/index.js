import validator from './validator.js';
import {header} from './componentes/header.js';
import {footer} from './componentes/footer.js';
import {search} from './componentes/search.js'
import {productCategories} from './componentes/productCategories.js'
import {featuredProducts} from './componentes/featuredProducts.js'
import {productos} from './componentes/products.js'

let body = document.querySelector("body")
body.appendChild(header())
body.appendChild(search())
body.appendChild(productCategories())
body.appendChild(productos())
body.appendChild(featuredProducts())
body.appendChild(footer())


let numberCard = "4137894711755904";
let lenghtNumberCard = numberCard.length
let reverseNumberCard = numberCard.split('').reverse().join('');

for (let posicion; posicion<lenghtNumberCard; posicion +=1){
    console.log(posicion);
}