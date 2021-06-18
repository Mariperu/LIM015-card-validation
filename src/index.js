import validator from './validator.js';
//console.log(validator);

//Section 1/ BOTON VALIDAR
let validationBtn = document.getElementById('validationBtn');
validationBtn.addEventListener('click', () => { //str.addEventListener(1er parámetro, 2do parámetro)

  let name = document.getElementById("name").value;
  let dni = document.getElementById("dni").value;
  let creditCardNumber = document.getElementById("tcId").value;
  let tcValid = validator.isValid(creditCardNumber); //llama al objeto_validator.metodo_isValid
  let tcMask = validator.maskify(creditCardNumber); //llama al objeto_validator.metodo_maskify
  let tcName = validator.getIssuer(creditCardNumber); //llama al objeto_validator.metodo_getIssuer

  //Condiciones para los inputs
  if (name == '' || name == Number(name)) {
    alert("Por favor ingresa tu nombre y apellido")
  } else if (dni == '' || dni != parseInt(dni) || dni.length < 8) {
    alert("Por favor ingresa tu DNI")
  } else if (creditCardNumber == '' || creditCardNumber != parseInt(creditCardNumber) ||
    creditCardNumber.length < 14) {
    alert("Por favor ingresa el número de la tarjeta");
  } else {//Si la tc es VALIDA:
    if (tcValid) { //booleano: tcValid=true  
           
      document.getElementById("section1").style.display = "none"; //oculta div1(bloque)
      document.getElementById("section2").style.display = "block"; //muestra div2

      document.getElementById("onlyName").innerHTML = "¡ Hola " + name.toUpperCase() + " !";
      document.getElementById("numMask").innerHTML = tcMask; //devuelve tc válido con ## 
      document.getElementById("franchise").innerHTML = tcName; //devuelve franquicia de tc 
      //InnerHTML, propiedad que permite leer un dato o asignarlo al contenido html
    } else {//Si la tc es INVALIDA:
      alert("El número " + tcMask + " es inválido"); //devuelve tc INVALIDO con ##
      document.getElementById("form1").reset(); //reset: método, limpia (restaura) el formulario
    }
  }
});
//Section 2 / BOTON ENVIAR CLAVE  
let sentBtn = document.getElementById('sent');
sentBtn.addEventListener('click', () => {//str.addEventListener(1er parámetro, 2do parámetro)

  let key = document.getElementById("key").value;
  //Condiciones para la clave celular
  if (key == '' || key != Number(key) || key.length < 4) {
    alert("Por favor ingresa la clave")
  } else {
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "block";
  }
});
//Section 3 

//Línea de crédito aleatorio de 1000 a 10000
//random(num aleatorio de 0 a 0.9),floor(redondea al menor)
const creditLine = (Math.floor(Math.random() * 10) + 1) * 1000;
document.getElementById("line").innerHTML = "$ " + creditLine + " dólares";

// BOTON PARA VOLVER AL INICIO
let endBtn = document.getElementById('end');
endBtn.addEventListener('click', () => {//str.addEventListener(1er parámetro, 2do parámetro)
  document.getElementById("section3").style.display = "none";
  document.getElementById("section1").style.display = "block";
  document.getElementById("form1").reset();//reset: método, limpia (restaura) el formularios
  document.getElementById("form2").reset();
});