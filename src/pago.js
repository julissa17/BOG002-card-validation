import validator from './validator.js';
import { header } from './componentes/mainPage/header.js';
import { footer } from './componentes/mainPage/footer.js';
//import {productCategories} from './componentes/mainPage/productCategories.js'
//import {listProducts} from './componentes/mainPage/listProducts.js'
//import {featuredProducts} from './componentes/mainPage/featuredProducts.js'
import { shoopingCart } from './componentes/mainPage/shoopingCart/shoopingCart.js'
import { search } from './componentes/mainPage/search.js';


//let body = document.querySelector("body")
//let form = document.getElementsByTagName("form")

//body.appendChild(header())
//body.appendChild(search())
//body.appendChild(productCategories())
//body.appendChild(listProducts())
//body.appendChild(featuredProducts())
//body.appendChild(shoopingCart())
//body.appendChild(footer())

//Método para seleccionar solo un checkbox
let Checked = null;
//The class name can vary
for (let CheckBox of document.getElementsByClassName('option')){
	CheckBox.onclick = function(){
  	if(Checked!=null){
      Checked.checked = false;
      Checked = CheckBox;
    }
    Checked = CheckBox;
  }
}