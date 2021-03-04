let creditCardNumber="4083952015263";

function isValid(creditCardNumber){

  var size=creditCardNumber.length;
  var array=creditCardNumber.split("");//obtuve el array

  array = array.reverse();//lo invierte
  var total=0; //variable para la suma
  for(let i=0; i<size; i++){
    if (i%2==0){
    total+=parseInt(array[i])
    }
    else{
    var position= array[i]*2;
    position>9
    ? total += position-10+1
    : total += position
    }
  }
  if(total%10==0){
    return true
  }
  else{
    return false
    }
}
//console.log(isValid(creditCardNumber))
function maskify(creditCardNumber) {
    var size = creditCardNumber.length;//saco el tamaño total del número de tarjeta
    var newCreditCard = "";
    for(var i = 0; i< size - 4;i++)//declaro el recorrido sin las últimas 4 cifras 
      {
        newCreditCard += "#";//reemplazo
      }
     return newCreditCard + creditCardNumber.substring(size-4,size);//con substring me aseguro de incluir las ultimas 4 cifras sin modificarlas 
    
  }
  
  
  console.log(maskify(creditCardNumber));