//obtengo el número
let numberCard = "1234567890";



function isValid(numberCard){
        //obtengo el largo del número
        let lenghtNumberCard = numberCard.length
        //hago el reverse del número, split separa el string en un array, reverse lo invierte, join lo une de nuevo en número
        let reverseNumberCard = numberCard.split('').reverse().join('');
        let total = 0

        for (let position = 0 ; position < lenghtNumberCard; position ++){
            //como ahora necesitamos iniciar desde la posicion 1, esto siempre le suma a la posicion
            let newPosition = position+1

            if( newPosition % 2 == 0){
                let newNumber =reverseNumberCard[position]*2

                newNumber > 9
                ? total += newNumber-10+1
                : total += newNumber
            }
            else{
                total += parseInt(reverseNumberCard[position]) 
            }
        }

        if (total % 10 == 0){
            return true
        }
        else{
            return false
        }

}


isValid(numberCard);