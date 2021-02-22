const footer = ()=>{

    const view =`
    <div class="footer__icons">
        <div class="icon-whatsapp icon"></div>
        <div class="icon-instagram icon"></div>
        <div class="icon-facebook icon"></div>
    </div>

    <div class="footer__text">
        <p>Términos y condiciones</p>
        <p>Política de tramientos de datos</p>
    </div>`

    const cFooter = document.createElement("footer")
    cFooter.classList.add('footer')
    cFooter.innerHTML = view



    return cFooter
}

export{footer}