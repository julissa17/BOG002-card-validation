import validator from './validator.js';
import {header} from './componentes/header.js';
import {footer} from './componentes/footer.js';

let body = document.querySelector("body")
body.appendChild(header())
body.appendChild(footer())