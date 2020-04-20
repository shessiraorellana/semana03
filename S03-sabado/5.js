/*
5. Crea tu propia función sort que funcione igual a Array.sort. Por ejemplo: function miSort(arreglo, callback).
*/
var listaNumeros = [6,3,5,7,1,4,2];

const miSort = function (lista, callback){
    return nuevaLista = callback(lista.sort());
}

const listaOrdenada = miSort(listaNumeros, function(lista){
    return lista;
})

console.log(listaOrdenada);