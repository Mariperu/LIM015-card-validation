const validator = {
//metodo1 isValid  => 
  isValid:function(creditCardNumber) {
  
    const card = creditCardNumber.split("");
    const cardReverse = card.reverse();
    //console.log(cardReverse) //devuelve array con numeros en strings    
    let suma1 = 0;
    let suma2 = 0;
    let suma3 = 0;
    let mult = 0;
    let total = 0;

      for (let i=0; i<cardReverse.length ; i++){ //para sumar posiciones impares
        if(i % 2 == 0){ //posic IMPAR
          suma1 = suma1 + parseInt(cardReverse[i]) //***se suma1 los números de posic impar
          //console.log (suma1) //suma 1ro + 3ro, luego se acumula la suma al 5to, 7mo...
        }
      }
      //Func extra para sumar DOS dígitos de un nro (se utiliza más abajo)
      function sumDig(num) { 
      let num2 = num%10 + Math.floor(num/10); //math.floor redondea el numero hacia el menor
      return num2;    //console.log(sumDigit(78)) //prueba
      }
      //Para sumar posic PARES* *   [0,*1*,2,*3*,...]
      for (let j=0; j<cardReverse.length ; j++){//para sumar posic PARES
        if (j % 2 != 0 ){ //posic PAR
          mult = parseInt(cardReverse[j]) * 2; //multiplica*2 
          //console.log (mult); 
            if (mult < 10){//suma números menores a 10 (que no tengan 2 díg)
              suma2 = suma2 + mult;  //*** se acumula la suma2
            //console.log(suma2)
            }
            else{//suma 2 dígitos y lo convierte en uno (utiliza función sumDig)
              suma3 = suma3 + sumDig(mult); //***se suma la suma3
            //console.log(suma3)
            }
        }   
      }
      total = suma1 + suma2 + suma3 //suma total final acumulada
      //console.log(total)
  //Corroborando que suma total sea mult de 10 (resto=0)
    let corroboration = total % 10; 
      return corroboration == 0 ? true : false; //forma resumida de if y else
  //console.log(validator.isValid('1234567890')); //  false/invalido
  //console.log(validator.isValid('4083952015263')); //  true /valido
  }, // aquí termina funcion validar (método de objeto validator)

//metodo2 maskify
  maskify:function(creditCardNumber) {
    const mask = creditCardNumber.split("");
    //console.log (mask);
    let maskEnd;
  // reemplaza valores por #, excepto 4 últimos
    for (let k=0; k<mask.length-4; k++){
      mask[k] = '#' 
    }
    //join une elementos, para que no se muestre separado con (,)
    maskEnd = mask.join("") 
    return maskEnd;
    //console.log(maskEnd); 
  }, //aquí termina funcion enmascarar (método de objeto maskify)

//metodo3 getIssuer (para indicar la franquicia de la tarjeta válida)
  getIssuer:function(creditCardNumber) {
    let issuer = creditCardNumber.toString();
    issuer = issuer.split("");
    let bank = " ";
      
      if(parseInt(issuer[0]) > 6){
        bank = "No existe";
      }
      else if(issuer[0] == '4'){//Para primer dígito 4
        bank = "VISA";
      }else if(issuer[0] == '5'){if(issuer[1] == '1' || issuer[1] =='2'|| issuer[1] =='3'
        || issuer[1] =='4'|| issuer[1] =='5'){ 
          bank = "MasterCard";//Para primer dígito 5 y +  //Para 51 a 55
        }
      }else if(issuer[0] == '3'){ //Para primer dígito 3
        if(issuer[1] == '4' || issuer[1] =='7'){ //Para 34 y 37
          bank = "American Express";
        }
        //Para 36
        else if(issuer[1] == '6'){bank = "Diners Club /International";}
        //Para 38
        else if(issuer[1] == '8'){bank = "Diners Club /Carte Blanche";
        }
        //Para 300 a 305
        else if(issuer[1] == '0'){if (issuer[2] == '0' || issuer[2] == '1' || issuer[2] == '2'
          || issuer[2] == '3' || issuer[2] == '4' || issuer[2] == '5'){
            bank = "Diners Club /Carte Blanche"}
        } 
        else{bank = "JCB";
        }  
      }//aqui termina validar dígitos que empiezan con 3

      //Para primer dígito 2 y +   //Para 2014 y 2149  
      else if(issuer[0] == '2'){
         if((issuer[1] == "0" && issuer[2] == "1" && issuer[3] == "4") 
         || (issuer[1] == "1" && issuer[2] == "4" && issuer[3] == "9")){
          bank = "Diners Club /enRoute";
         }//Para 2131
         else if(issuer[1] == "1" && issuer[2] == "3" && issuer[3] == "1"){
          bank = "JCB";} 
      }
      //aqui termina validar dígitos que empiezan con 2
      
      //Para primer dígito 1 y +   //Para 1800
      else if(issuer[0] == '1'){
        if(issuer[1] == "8" && issuer[2] == "0" && issuer[3] == "0"){
          bank = "JCB";
        }
      }else if(issuer[0] == '6'){ //Para primer dígito 6 y +
        if(issuer[1] == "0" && issuer[2] == "1" && issuer[3] == "1"){
          bank = "Discover";}//Para 6011
      }else{
        bank = "Banco desconocido";
    }
      return bank;
  }//aquí termina funcion emisor (método de objeto getIssuer)
};

export default validator;
