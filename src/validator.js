const validator = {
  //KEY1
  isValid: function (creditCardNumber) {
    const cardReverse = (creditCardNumber.split("")).reverse();

    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;

    //Suma dos dígitos
    function sumDig(num2D) {
      const num = num2D % 10 + Math.floor(num2D / 10); 
      return num;
    }

    //Suma números de posición PAR
    for (let i = 0; i < cardReverse.length; i++) {
      if (i % 2 == 0) {
        sum1 = sum1 + parseInt(cardReverse[i]);
      }
    }
    //Suma números de posición IMPAR
    for (let i = 0; i < cardReverse.length; i++) {
      if (i % 2 != 0) {
        const mult = parseInt(cardReverse[i]) * 2;
        if (mult < 10) {//Nros de un dígito
          sum2 = sum2 + mult;
        } else {//Nros de dos dígitos 
          sum3 = sum3 + sumDig(mult);
        }
      }
    }
    const total = sum1 + sum2 + sum3;

    const corroboration = total % 10;
    return corroboration == 0 ? true : false;
  },

  //KEY2
  maskify: function (creditCardNumber) {
    const mask = creditCardNumber.split("");
    
    for (let i = 0; i < mask.length - 4; i++) {
      mask[i] = '#';
    }
    const maskEnd = mask.join("");
    return maskEnd;
  },

  //KEY3
  getIssuer: function (creditCardNumber) {
    const issuer = creditCardNumber.split("");
    let franchise;

    if (issuer[0] > 6) { //1er díg.
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
          franchise = "Diners Club /Carte Blanche";
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
  },

  //KEY4  
  creditLine: (Math.floor(Math.random() * 10) + 1) * 1000,
};

export default validator;