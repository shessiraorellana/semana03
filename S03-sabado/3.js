/*
3. Crea tu propia función filter que funcione igual a Array.filter. Por ejemplo: function miFilter(arreglo, filter).
*/
var listaElectro = [
    {"nombre" : "laptop", "precio" : 3500},
    {"nombre" : "disco duro", "precio" : 300},
    {"nombre" : "impresora", "precio" : 850}
];

var miFilter = function(arreglo,nuevaFuncion){
    var filtroArreglo = [];
    arreglo.forEach((elemento,indice,arreglo) => {
        if(nuevaFuncion(elemento,indice,arreglo)){
            filtroArreglo.push(elemento);
        }
    });
    return filtroArreglo;
};

var nuevoArreglo = miFilter(listaElectro,function(elem){
    return elem.precio>=500;
})
console.log(nuevoArreglo);