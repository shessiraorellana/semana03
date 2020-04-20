/*
7. Crear una función usando callbacks que haga el incremento de valores en un array 
(aumentar en uno cada elemento del array).
*/
var miArreglo = [1,2,3,4,5,6,7];

function metodo(array,callback1){
    var nuevoArreglo = [];
    array.forEach(element => {
        nuevoArreglo.push(callback1(element));
    });
    return nuevoArreglo;
};

var retornaArreglo = metodo(miArreglo,(n => n+1));

console.log(retornaArreglo);

