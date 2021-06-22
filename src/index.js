import validator from './validator.js';

//BOTON VALIDAR
const validationBtn = document.getElementById('validationBtn');
validationBtn.addEventListener('click', () => { 

  const name = document.getElementById("name").value;
  const dni = document.getElementById("dni").value;
  const creditCardNumber = document.getElementById("tcId").value; 
  const tcValid = validator.isValid(creditCardNumber);
  const tcMask = validator.maskify(creditCardNumber);
  const tcName = validator.getIssuer(creditCardNumber); 

  if (name == '' || name == Number(name)) {
    alert("Por favor ingresa tu nombre y apellido")
  } else if (dni == '' || dni != parseInt(dni) || dni.length < 8) {
    alert("Por favor ingresa tu DNI")
  } else if (creditCardNumber == '' || creditCardNumber != parseInt(creditCardNumber) ||
    creditCardNumber.length < 14) {
    alert("Por favor ingresa el número de la tarjeta");
  } else {
    if (tcValid) {//true
           
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "block";

      document.getElementById("onlyName").innerHTML = "¡ Hola " + name.toUpperCase() + " !";
      document.getElementById("franchise").innerHTML = tcName;
      document.getElementById("numMask").innerHTML = tcMask;
    
    } else {//false
      alert("El número " + tcMask + " es inválido");
      document.getElementById("form1").reset(); 
    }
  }
});
//BOTON ENVIAR clave 
const sentBtn = document.getElementById('sent');
sentBtn.addEventListener('click', () => {

  const key = document.getElementById("key").value;
  
  if (key == '' || key != Number(key) || key.length < 4) {
    alert("Por favor ingresa la clave")
  } else {
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "block";
  }
});

const creditLine = validator.creditLine;
document.getElementById("line").innerHTML = "$ " + creditLine + " dólares";

//BOTON FINALIZAR
const endBtn = document.getElementById('end');
endBtn.addEventListener('click', () => {
  document.getElementById("section3").style.display = "none";
  document.getElementById("section1").style.display = "block";
  document.getElementById("form1").reset();
  document.getElementById("form2").reset();
});