import validator from './validator.js';
//console.log(validator);

//CONTAINER 1/ BOTON INICIAR
const validationB = document.getElementById('validationB');
validationB.addEventListener('click', () =>{ //str.addEventListener(1er parámetro, 2do parámetro)
    let name = document.getElementById("name").value;
    let dni = document.getElementById("dni").value;
    let creditCardNumber = document.getElementById("tcId").value;
    let tcValid = validator.isValid(creditCardNumber); //llama al objeto_validator.metodo_isValid
    let tcMask = validator.maskify(creditCardNumber); //llama al objeto_validator.metodo_maskify
    let tcName = validator.getIssuer(creditCardNumber); //llama al objeto_validator.metodo_getIssuer
   // console.log(tcName + " prueba");

    if (name == ''|| name == Number(name)){
     /*  // document.getElementById("aleta1").style.display = "block";
       // document.getElementById("aleta1").style.display = "none"; */
      alert ("Por favor ingresa tu nombre y apellido")
    }
    else if (dni == ''|| dni != parseInt(dni)) {
      alert ("Por favor ingresa tu DNI")
    }
    else if (creditCardNumber == '' || creditCardNumber != parseInt(creditCardNumber) ){
        alert ("Por favor ingresa el número de la tarjeta");
    }
    else{        
        if (tcValid == true){ //booleano: true               
            //console.log(tcMask) //devuelver tc con ##  
               
        document.getElementById("container1").style.display = "none";
        document.getElementById("container2").style.display = "block";
        document.getElementById("onlyName").innerHTML = "Hola " + name.toUpperCase() +" !";
        document.getElementById("msValid").innerHTML = tcMask;
        document.getElementById("banks").innerHTML = tcName;
        }
        else{
            alert ("El número " + tcMask + " es inválido");
            //console.log(tcMask) //devuelver tc con ##
        }   
    } 
});
//CONTAINER 2/ BOTON ENVIAR CLAVE
  
/*let onlyName = localStorage.getItem('name_temporal');
document.getElementById("onlyName").innerHTML = "Hola " + onlyName;
/*InnerHTML, propiedad que permite leer un dato o ASIGNARLO al contenido html*/
    
const sent = document.getElementById('sent');
sent.addEventListener('click', () =>{ 

    let key = document.getElementById("key").value;
    if (key == ''|| key != Number(key)){
        alert ("Por favor ingresa la clave")
    }
    else{
    document.getElementById("container2").style.display = "none";
    document.getElementById("container3").style.display = "block";
    }
});
 

//CONTAINER 3/ BOTON PARA VOLVER AL INICIO

//Linea de crédito aleatorio de 1000 a 9000
let creditLine = (Math.floor(Math.random()*10)+1)*1000; 
//random(num aleat de 0 a 0.9),floor(redondea al menor)
document.getElementById("line").innerHTML = "$ " + creditLine +" dólares";

const end = document.getElementById('end');
end.addEventListener('click', () =>{ 
    document.getElementById("container3").style.display = "none";
    
    document.getElementById("container1").style.display = "block";
    document.getElementById("form1").reset(); //reset limpia inputs anteriores de formulario
    document.getElementById("form2").reset();   
});