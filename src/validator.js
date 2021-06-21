const validator = {
  //KEY 1 isValid  
  isValid: function (creditCardNumber) {
    const cardReverse = (creditCardNumber.split("")).reverse(); //Array
    let suma1 = 0;
    let suma2 = 0;
    let suma3 = 0;

    //Suma 2 dígitos de un nro
    function sumDig(num2D) {
      const num = num2D % 10 + Math.floor(num2D / 10); //floor:redondea al menor
      return num;
    }

    //Suma de números de posición par de Array [0,2,4...]
    for (let i = 0; i < cardReverse.length; i++) {
      if (i % 2 == 0) {
        suma1 = suma1 + parseInt(cardReverse[i])
      }
    }
    //Suma de números de posición impar de Array [1,3,5...]
    for (let i = 0; i < cardReverse.length; i++) {
      if (i % 2 != 0) {
        //Multiplicando*2
        const mult = parseInt(cardReverse[i]) * 2;
        if (mult < 10) {
          //Suma nros < 10 (que no tengan 2 dígitos)
          suma2 = suma2 + mult;
        } else {
          //Suma nros >= 10, previamente suma sus 2 dígitos
          suma3 = suma3 + sumDig(mult);
        }
      }
    }
    const total = suma1 + suma2 + suma3;
    //Suma total múltiplo de 10
    const corroboration = total % 10;
    return corroboration == 0 ? true : false;
  },

  //KEY 2 maskify
  maskify: function (creditCardNumber) {
    const mask = creditCardNumber.split("");
    // reemp. cada elemnto con #, excepto 4 últimos
    for (let i = 0; i < mask.length - 4; i++) {
      mask[i] = '#'
    }
    const maskEnd = mask.join("")
    return maskEnd;
  },

  //KEY 3 getIssuer 
  getIssuer: function (creditCardNumber) {
    const issuer = creditCardNumber.split("");
    let franchise;

    if ((issuer[0]) > 6) { //Primer dígito
      franchise = "No existe";
    } else if (issuer[0] == 4) { //4
      franchise = "VISA";
    } else if (issuer[0] == 5) { //51 a 55
      if (issuer[1] == 1 || issuer[1] == 2 || issuer[1] == 3 ||
        issuer[1] == 4 || issuer[1] == 5) {
        franchise = "MasterCard";
      }
    } else if (issuer[0] == 3) { //34 y 37
      if (issuer[1] == 4 || issuer[1] == 7) {
        franchise = "American Express";
      } else if (issuer[1] == 6) { //36
        franchise = "Diners Club /International";
      } else if (issuer[1] == 8) { //38
        franchise = "Diners Club /Carte Blanche";
      } else if (issuer[1] == 0) { //300 a 305
        if (issuer[2] == 0 || issuer[2] == 1 || issuer[2] == 2 ||
          issuer[2] == 3 || issuer[2] == 4 || issuer[2] == 5) {
          franchise = "Diners Club /Carte Blanche"
        }
      } else { //3
        franchise = "JCB";
      }
    } else if (issuer[0] == 2) { //2014 y 2149
      if ((issuer[1] == 0 && issuer[2] == 1 && issuer[3] == 4) ||
        (issuer[1] == 1 && issuer[2] == 4 && issuer[3] == 9)) {
        franchise = "Diners Club /enRoute";
      } //2131
      else if (issuer[1] == 1 && issuer[2] == 3 && issuer[3] == 1) {
        franchise = "JCB";
      }
    } else if (issuer[0] == 1) { //1800
      if (issuer[1] == 8 && issuer[2] == 0 && issuer[3] == 0) {
        franchise = "JCB";
      }
    } else if (issuer[0] == 6) { //6011
      if (issuer[1] == 0 && issuer[2] == 1 && issuer[3] == 1) {
        franchise = "Discover";
      }
    } else {
      franchise = "Desconocido";
    }
    return franchise;
  }
};

export default validator;