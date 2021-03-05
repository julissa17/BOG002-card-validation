import validator from './validator.js';

//get the form
let form = document.querySelector('.c-formulario');
//get the element input  where the card number is entered
let inputCardNumber = document.querySelector('#cardNumber');
//credit card number
let creditCardNumber = "";


//stop the event submit,es decir el de enviar información, este evento por defecto se activa al darle click a un input type boton
form.addEventListener('submit',(evt)=>{
    evt.preventDefault()
    //evalua si el valor corresponde a un número de tarjeta o no
    if(validator.isValid(creditCardNumber) == false){
        alert('tu tarjeta no se ha reconocido');
    }else{
        alert('tus datos se han enviado con exito');
    };
    //reseteo el formulario
    form.reset()
})

//stop the event of pasting information into the form
inputCardNumber.addEventListener('paste',(evt)=>{
    evt.preventDefault()
})

// run the mask function
inputCardNumber.addEventListener('input',(event)=>{
    if(event.inputType == 'insertText'){
        creditCardNumber += event.data;
    }
    else{
        creditCardNumber = creditCardNumber.substring(0,creditCardNumber.length-1);
    }
    //enmascara el valor
    inputCardNumber.value = validator.maskify(inputCardNumber.value)

})














































