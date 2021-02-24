import validator from './validator.js';
import {header} from './componentes/header.js';
import {footer} from './componentes/footer.js';
import {search} from './componentes/search.js'

let body = document.querySelector("body")
body.appendChild(header())
body.appendChild(search())
body.appendChild(footer())

