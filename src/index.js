import validator from './validator.js';
import {header} from './componentes/header.js';
import {footer} from './componentes/footer.js';
import {buscador} from './componentes/search.js';
import {categoriesSection} from './componentes/categoriesSection.js'

let body = document.querySelector("body")
body.appendChild(header())
body.appendChild(buscador())
body.appendChild(categoriesSection())
body.appendChild(footer())

