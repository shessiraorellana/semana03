/*
1. Crea tu propia función forEach que funcione igual a Array.forEach. 
Por ejemplo: function miForEach(arreglo, callback){ // completa aquí } 
*/
var listaElectro = [
    {"nombre" : "laptop", "precio" : 3500},
    {"nombre" : "disco duro", "precio" : 300},
    {"nombre" : "impresora", "precio" : 850}
];

var miForEach = function(arreglo, callback){ 
    let nuevoArreglo = [];
    for(let i=0; i < arreglo.length; i++){
        nuevoArreglo.push(callback(arreglo[i]));
    };
    return nuevoArreglo;
 };

 var retornarArreglo = miForEach(listaElectro,(lista)=>lista.nombre);
 
 console.log(retornarArreglo);