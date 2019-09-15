'use strict'

//parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){ // resto_de_frutas es para uma fumcion rest y si le ponto 3 puntitos
                                                            //tomara todos los valores extra en un array

    console.log("Fruta 1:", fruta1);
    console.log("Fruta 2:", fruta2);
    console.log(resto_de_frutas);

}

listadoFrutas("manzana", "pera", "uva", "cajuil", "naranja");
