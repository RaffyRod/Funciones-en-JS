'use strict'

//definir funciones

function porConsola(numero1, numero2){  ///funcion para que escriba por consola

    console.log("Suma"+" : "+(numero1+numero2));
    console.log("Resta"+" : "+ (numero1-numero2));
    console.log("Multiplicacion"+" : "+(numero1*numero2));
    console.log("Division"+" : "+(numero1/numero2));
    console.log("********************************");

}

function porPantalla(numero1, numero2){  // funcion para que escriba por pantalla
    document.write("Suma"+" : "+(numero1+numero2)); 
    document.write("Resta"+" : "+ (numero1-numero2));
    document.write("Multiplicacion"+" : "+(numero1*numero2));
    document.write("Division"+" : "+(numero1/numero2));


}


function calculadora(numero1, numero2, mostrar = false){
    
    if(mostrar == false){
        porConsola(numero1, numero2);


}else{
        porPantalla(numero1, numero2);
}
    
}

//llamar la funcion
calculadora(20, 50, true);
//calculadora(4, 7);

/*for(var i = 1; i <=10; i++){
    console.log(i);
    calculadora(i, 8);

}*/