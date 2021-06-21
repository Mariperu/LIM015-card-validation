import validator from './validator.js';

//BOTON VALIDAR
const validationBtn = document.getElementById('validationBtn');
validationBtn.addEventListener('click', () => { 

  const name = document.getElementById("name").value;
  const dni = document.getElementById("dni").value;
  const creditCardNumber = document.getElementById("tcId").value;
  //Object:validator, Key:isValid, Value:func/mét. 
  const tcValid = validator.isValid(creditCardNumber);
  const tcMask = validator.maskify(creditCardNumber);
  const tcName = validator.getIssuer(creditCardNumber); 

  //Condiciones para los inputs
  if (name == '' || name == Number(name)) {
    alert("Por favor ingresa tu nombre y apellido")
  } else if (dni == '' || dni != parseInt(dni) || dni.length < 8) {
    alert("Por favor ingresa tu DNI")
  } else if (creditCardNumber == '' || creditCardNumber != parseInt(creditCardNumber) ||
    creditCardNumber.length < 14) {
    alert("Por favor ingresa el número de la tarjeta");
  } else {
    if (tcValid) { //Si es VALIDA:
           
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "block";

      document.getElementById("onlyName").innerHTML = "¡ Hola " + name.toUpperCase() + " !";
      document.getElementById("franchise").innerHTML = tcName;
      document.getElementById("numMask").innerHTML = tcMask;
    
    } else {//Si es INVALIDA:
      alert("El número " + tcMask + " es inválido");
      document.getElementById("form1").reset(); //reset:método, limpia (restaura)
    }
  }
});
//BOTON ENVIAR CLAVE 
const sentBtn = document.getElementById('sent');
sentBtn.addEventListener('click', () => {

  const key = document.getElementById("key").value;
  //Condiciones para la clave
  if (key == '' || key != Number(key) || key.length < 4) {
    alert("Por favor ingresa la clave")
  } else {
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "block";
  }
});


//Línea de 1000 a 10000
const creditLine = (Math.floor(Math.random() * 10) + 1) * 1000;
//random(num aleatorio de 0 a 0.99...), floor(redondea al menor)
document.getElementById("line").innerHTML = "$ " + creditLine + " dólares";

// BOTON FINALIZAR, VOLVER AL INICIO
const endBtn = document.getElementById('end');
endBtn.addEventListener('click', () => {
  document.getElementById("section3").style.display = "none";
  document.getElementById("section1").style.display = "block";
  document.getElementById("form1").reset();//reset:método, limpia (restaura)
  document.getElementById("form2").reset();
});