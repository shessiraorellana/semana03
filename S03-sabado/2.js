/*
2. Crea tu propia función map que funcione igual a Array.map. Por ejemplo: function miMap(arreglo, callback). 
*/
var listaElectro = [
    {"nombre" : "laptop", "precio" : 3500},
    {"nombre" : "disco duro", "precio" : 300},
    {"nombre" : "impresora", "precio" : 850}
];

var miMap = function(arreglo, nuevaFuncion){
    nuevoArreglo = [];
    arreglo.forEach(function(elemento){
        nuevoArreglo.push(nuevaFuncion(elemento));
    });
    return nuevoArreglo;
};

var retornarArreglo = miMap(listaElectro,function(lista){return lista.nombre})

console.log(retornarArreglo);