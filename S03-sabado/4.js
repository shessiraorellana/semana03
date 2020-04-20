/*
4. Crea tu propia función reduce que funcione igual a Array.reduce. Por ejemplo: function miReduce(arreglo, reduce). 
*/
var listaElectro = [
    {"nombre" : "laptop", "precio" : 3500},
    {"nombre" : "disco duro", "precio" : 300},
    {"nombre" : "impresora", "precio" : 850}
];

var miReduce = function(arreglo){
    var cantidad = 0;
    arreglo.forEach(elemento => {
        cantidad += elemento.precio;
    });
    return cantidad;
}

var precios = miReduce(listaElectro);
console.log(precios);
