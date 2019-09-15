'use strict'

//funciones asnonimas = funciones que no tienen nombre

/*var pelicula = function(nombre){
    return "La pelicula es: "+nombre;
}*/

//funcion de call back es una funcionn que se ejecuta dentro de otra

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
  
}

/*sumame(5, 7, function(dato){
        console.log("La suma es:", dato);
},
function(dato){
    console.log("La suma por dos es:", (dato*2));
});*/
// funciones de flecha, sustituyen la palabra function por una flecha 

sumame(5, 7, dato=> {
    console.log("La suma es:", dato);
},
dato => {
console.log("La suma por dos es:", (dato*2));
});