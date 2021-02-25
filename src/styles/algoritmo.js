let numberCard = "5466913708377064"


let total = null

for(let posicion in numberCard){

    if(posicion % 2 == 0){

        let newNumber = numberCard[posicion]*2

        newNumber>9
        ?total += newNumber-10+1
        :total += parseInt(newNumber)
    }

    else{
        total += parseInt(numberCard[posicion])
    }
}

total % 10 == 0
? console.log("la tarjeta es válida")
: console.log("la tarjeta no es válida")









