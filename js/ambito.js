'use strict'

function holaMundo(texto){
    var hola_mundo = "Texto dentro de Funcion";  //una variable dentro de una funcion solo puede ser llamada dentro de la funcion
    console.log(texto);

}

var numero = 12; //una variable local fuera de funcion se llama donde sea
var texto = "Hola a todos";

holaMundo(texto);