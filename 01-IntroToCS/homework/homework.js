'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  num = num.toString();         // paso todo a string
  let result = 0,
  aux = num.length-1

  for (let index = 0; index < num.length; index++) {
    const element = num[index]
    result += element*2**aux
    aux--;
  }

  return result;
}

function DecimalABinario(num) {
  // tu codigo aca
  let result = []
  if(typeof num != "number")
   console.log("El dato ingresado no es un numero") 
  else{
    while(num >= 1){
      result .push(num % 2)
      num = Math.floor(num/2)
    }
    
  }
  result.reverse()
  result = result.join("")
  return result;

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}