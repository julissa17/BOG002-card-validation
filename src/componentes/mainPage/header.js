//importo el componente buscador
import {search} from './search.js';

//componente header de la pagina principal
const header = ()=>{
    const view = `<div class="header__left">
                          <div class="header__icon-menu icon"></div>
                          <h2 class="header__logo">Logo</h2>
                        </div>

                        <div class="header__right">

                          <div class="header__icon-gato icon">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.10937 1.03126C0.468748 2.06251 0.515623 12.9844 2.48437 16.5L14.7187 9.00001C12.8437 5.67188 3.65625 0.0937552 2.10937 1.03126" fill="#4C5359"/>
                              <path d="M4.4531 5.29688C3.74997 5.71875 3.42185 12.8906 4.6406 15.1406L12.4687 10.3594C11.3437 8.20312 5.10935 4.92188 4.4531 5.29688" fill="#F7A4A4"/>
                              <path d="M27.8906 1.03126C29.5312 2.06251 29.4844 12.9844 27.5625 16.5L15.3281 9.00001C17.1562 5.67188 26.3437 0.0937552 27.8906 1.03126" fill="#4C5359"/>
                              <path d="M25.5469 5.29688C26.25 5.71875 26.5781 12.8906 25.3594 15.1406L17.4844 10.3594C18.6563 8.20312 24.8906 4.92188 25.5469 5.29688Z" fill="#F7A4A4"/>
                              <path d="M14.9062 6.14062C2.20311 6.14062 1.03124 15.2344 1.03124 20.3906C1.03124 22.5 7.21874 29.0625 14.9062 29.0625C22.5937 29.0625 28.7812 22.5 28.7812 20.3906C28.7812 15.2344 27.6094 6.14062 14.9062 6.14062" fill="#4C5359"/>
                              <path d="M11.3437 18.1406C11.3437 18.1406 9.8906 20.3906 7.21873 19.6875C4.54685 18.9844 4.40623 16.3125 4.40623 16.3125C4.40623 16.3125 5.85935 14.0625 8.53123 14.7656C11.25 15.4687 11.3437 18.1406 11.3437 18.1406" fill="#BFFFAB"/>
                              <path d="M11.0625 16.9688C11.0625 16.9688 9.7969 18.375 8.01565 18.375C6.09377 18.375 4.96877 15.6094 4.96877 15.6094C4.96877 15.6094 6.2344 14.1563 8.53127 14.7188C10.6406 15.2813 11.0625 16.9688 11.0625 16.9688Z" fill="#93E67F"/>
                              <path d="M9.09374 16.9219C9.09374 20.0156 7.59374 20.0156 7.59374 16.9219C7.64061 13.8281 9.09374 13.8281 9.09374 16.9219Z" fill="#4C5359"/>
                              <path d="M18.4687 18.1406C18.4687 18.1406 19.9219 20.3906 22.5937 19.6875C25.2656 18.9844 25.4062 16.3125 25.4062 16.3125C25.4062 16.3125 23.9531 14.0625 21.2812 14.7656C18.5625 15.4687 18.4687 18.1406 18.4687 18.1406" fill="#BFFFAB"/>
                              <path d="M18.7031 16.9688C18.7031 16.9688 19.9687 18.375 21.75 18.375C23.6719 18.375 24.7969 15.6094 24.7969 15.6094C24.7969 15.6094 23.5312 14.1563 21.2344 14.7188C19.125 15.2813 18.7031 16.9688 18.7031 16.9688Z" fill="#93E67F"/>
                              <path d="M20.6719 16.9219C20.6719 20.0156 22.1719 20.0156 22.1719 16.9219C22.1719 13.8281 20.6719 13.8281 20.6719 16.9219Z" fill="#4C5359"/>
                              <path d="M18.9375 20.625C17.7188 19.6875 16.4063 16.5469 14.9063 16.5469C13.4063 16.5469 12.0469 19.6875 10.8281 20.625C8.90627 22.125 3.7969 23.8125 3.7969 23.8125C3.7969 23.8125 9.2344 28.5938 14.8594 28.5938C20.4844 28.5938 25.9219 23.8125 25.9219 23.8125C25.9688 23.8125 20.8594 22.125 18.9375 20.625Z" fill="white"/>
                              <path d="M14.9063 26.7188C15.3464 26.7188 15.7031 26.1941 15.7031 25.5469C15.7031 24.8997 15.3464 24.375 14.9063 24.375C14.4662 24.375 14.1094 24.8997 14.1094 25.5469C14.1094 26.1941 14.4662 26.7188 14.9063 26.7188Z" fill="#FF94A4"/>
                              <path d="M18.8437 24.8906C18.375 25.1719 17.8594 25.2656 17.3906 25.2656C16.875 25.2187 16.4062 25.0781 16.0312 24.75C15.6562 24.4687 15.375 24.0469 15.2812 23.5312L14.9062 21.4219L14.5312 23.5312C14.4375 24 14.1562 24.4219 13.7812 24.75C13.4062 25.0781 12.8906 25.2187 12.4219 25.2656C11.9062 25.2656 11.3906 25.1719 10.9687 24.8906C10.5 24.6094 10.125 24.1875 9.93749 23.625C9.98436 24.2344 10.2656 24.7969 10.7344 25.2187C11.2031 25.6406 11.8125 25.875 12.375 25.875C13.0312 25.9219 13.6406 25.7344 14.1562 25.3594C14.4375 25.1719 14.6719 24.8906 14.8594 24.6094C15.0469 24.8906 15.2812 25.1719 15.5625 25.3594C16.0781 25.7344 16.7344 25.9219 17.3437 25.875C17.9531 25.8281 18.5625 25.5937 19.0312 25.2187C19.5 24.7969 19.8281 24.2344 19.8281 23.625C19.6875 24.1406 19.3125 24.6094 18.8437 24.8906Z" fill="#4C5359"/>
                              <path d="M16.7812 21C16.4062 20.5312 15.2343 20.4844 14.9062 20.4844C14.5781 20.4844 13.4062 20.5312 13.0312 21C12.75 21.3281 12.9843 22.1719 13.6875 22.875C14.1562 23.3438 14.5781 23.4844 14.9062 23.4844C15.2343 23.4844 15.7031 23.3438 16.125 22.875C16.8281 22.125 17.0625 21.3281 16.7812 21Z" fill="#4C5359"/>
                              </svg>    
                          </div>

                          <div class="header__icon-perro icon">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.40626 24.4219C4.21876 22.3594 2.95314 14.3438 3.98439 10.7344C4.73439 8.01562 7.64064 4.03125 10.2656 3C12.4688 2.10937 17.5313 2.10937 19.6875 3C22.3125 4.03125 25.2188 8.01562 25.9688 10.7344C27 14.3906 26.2031 22.3594 23.0625 24.4219C16.4063 28.7344 14.0625 28.7344 7.40626 24.4219" fill="#F5D1AC"/>
                              <path d="M2.39063 11.5781C4.07813 15.2813 4.5 15.4219 6.09375 11.0156C6.9375 8.67188 6.32813 7.26563 7.35938 5.76563C7.92188 4.92188 9.1875 3.51562 9.1875 3.51562C9.1875 3.51562 -0.796871 4.54688 2.39063 11.5781Z" fill="#423223"/>
                              <path d="M6.65625 3.375C4.125 5.01563 -1.26562 4.35938 1.92188 11.3438C3.60938 15.0469 4.03125 15.1875 5.625 10.7813C6.46875 8.4375 5.85938 7.03125 6.89063 5.53125C7.45313 4.6875 9.1875 3.51563 9.1875 3.51563C9.1875 3.51563 8.39063 2.25 6.65625 3.375" fill="#947151"/>
                              <path d="M27.6094 11.5313C25.9219 15.2344 25.5 15.375 23.9062 10.9688C23.0625 8.625 23.6719 7.21875 22.6406 5.71875C22.0781 4.875 20.8125 3.46875 20.8125 3.46875C20.8125 3.46875 30.7969 4.54688 27.6094 11.5313Z" fill="#423223"/>
                              <path d="M23.3437 3.375C25.875 5.01563 31.2656 4.35938 28.0781 11.3438C26.3906 15.0469 25.9687 15.1875 24.375 10.7813C23.5312 8.4375 24.1406 7.03125 23.1094 5.53125C22.5469 4.6875 20.8125 3.51563 20.8125 3.51563C20.8125 3.51563 21.6094 2.25 23.3437 3.375" fill="#947151"/>
                              <path d="M8.29686 17.2031C9.85017 17.2031 11.1094 15.9439 11.1094 14.3906C11.1094 12.8373 9.85017 11.5781 8.29686 11.5781C6.74356 11.5781 5.48436 12.8373 5.48436 14.3906C5.48436 15.9439 6.74356 17.2031 8.29686 17.2031Z" fill="white"/>
                              <path d="M7.59374 16.5C8.75872 16.5 9.70311 15.5556 9.70311 14.3906C9.70311 13.2256 8.75872 12.2812 7.59374 12.2812C6.42876 12.2812 5.48436 13.2256 5.48436 14.3906C5.48436 15.5556 6.42876 16.5 7.59374 16.5Z" fill="#3E4347"/>
                              <path d="M21.7031 17.2031C23.2564 17.2031 24.5156 15.9439 24.5156 14.3906C24.5156 12.8373 23.2564 11.5781 21.7031 11.5781C20.1498 11.5781 18.8906 12.8373 18.8906 14.3906C18.8906 15.9439 20.1498 17.2031 21.7031 17.2031Z" fill="white"/>
                              <path d="M22.4063 16.5C23.5712 16.5 24.5156 15.5556 24.5156 14.3906C24.5156 13.2256 23.5712 12.2812 22.4063 12.2812C21.2413 12.2812 20.2969 13.2256 20.2969 14.3906C20.2969 15.5556 21.2413 16.5 22.4063 16.5Z" fill="#3E4347"/>
                              <path d="M10.1719 22.875L12.3281 25.1719C13.6406 26.5313 16.3125 26.5313 17.625 25.1719L19.8281 22.875L17.5781 20.5312H12.4219L10.1719 22.875Z" fill="#7D644B"/>
                              <path d="M15 18.5625C15 18.5625 12.7031 21.8438 12.9844 23.3906C13.3594 25.6406 16.5938 25.6406 17.0156 23.3906C17.2969 21.8438 15 18.5625 15 18.5625" fill="#F15A61"/>
                              <path d="M15 24.2344L15.5156 21.0938H14.4844L15 24.2344Z" fill="#BA454B"/>
                              <path d="M12.6562 19.4531H17.3438V21.6094H12.6562V19.4531Z" fill="#423223"/>
                              <path d="M22.4062 19.9688L19.0781 16.4531C17.0625 14.3438 12.9375 14.3438 10.9219 16.4531L7.59374 19.9688C6.65624 20.9531 6.65624 22.5938 7.59374 23.5781C8.53124 24.5625 10.0781 24.5625 11.0156 23.5781L14.3437 20.0625C14.6719 19.7344 15.2812 19.7344 15.6094 20.0625L18.9375 23.5781C19.875 24.5625 21.4219 24.5625 22.3594 23.5781C23.3906 22.5938 23.3906 20.9531 22.4062 19.9688Z" fill="#947151"/>
                              <path d="M12.2344 16.7344C12.2344 15.5156 13.4531 15.2812 15 15.2812C16.5469 15.2812 17.7656 15.5156 17.7656 16.7344C17.7656 17.7187 15.5625 18.5625 15 18.5625C14.4375 18.5625 12.2344 17.6719 12.2344 16.7344Z" fill="#3E4347"/>
                              <path d="M10.9266 18.2869L11.3902 17.8219L11.8547 18.2855L11.3911 18.75L10.9266 18.2869Z" fill="#3E4347"/>
                              <path d="M9.81893 19.5989L10.2825 19.1344L10.7466 19.598L10.2835 20.062L9.81893 19.5989Z" fill="#3E4347"/>
                              <path d="M11.3086 20.0452L11.7722 19.5806L12.2367 20.0438L11.7736 20.5088L11.3086 20.0452Z" fill="#3E4347"/>
                              <path d="M18.142 18.2756L18.607 17.8125L19.0702 18.277L18.6056 18.7406L18.142 18.2756Z" fill="#3E4347"/>
                              <path d="M19.2788 19.5759L19.7438 19.1124L20.2069 19.5769L19.7424 20.0405L19.2788 19.5759Z" fill="#3E4347"/>
                              <path d="M17.7877 20.0677L18.2522 19.6045L18.7158 20.0686L18.2513 20.5327L17.7877 20.0677Z" fill="#3E4347"/>
                              </svg>
                          </div>

                          <div class="header__icon-canasta icon"></div>
                          </div>
    `;
    //creo el componente
    const cHeader = document.createElement("header");
    cHeader.classList.add("header");
    cHeader.innerHTML = view;
    
    //funcionalidad del carrito, desplegar y cerrar
    let buttonCart = cHeader.querySelector(".header__icon-canasta");
    buttonCart.addEventListener("click", ()=>{
      //obtiene el carrito de compras, agrega la clase visible y esconde el excedente del body
        let shoopingCart = document.querySelector(".shoopingCart");
        shoopingCart.classList.add("shoopingCart--visible");
        document.body.style.overflow = 'hidden';
    });

    //evento redimensión del tamaño del width del windows
    window.onresize = ()=>{
      moveSearch();
    }

    //evento cargar la pagina
    window.onload = ()=> {
      moveSearch();
    }


    return cHeader
}

export {header}

//función que mueve el buscador según el view
function moveSearch (){
  const search = document.querySelector('.c-buscador');
  const cHeaderRight = document.querySelector('.header__right');


    if (window.innerWidth > 650){
    document.querySelector('header').insertBefore(search,cHeaderRight);
    search.classList.add('c-buscador--blanco');
    }
    else{
      document.querySelector('header').insertAdjacentElement('afterend',search);
      search.classList.remove('c-buscador--blanco');
    };
}