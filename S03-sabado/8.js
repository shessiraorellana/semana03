/*
8. Crear una función usando callbacks que eleve al cuadrado 
y al cubo un numero enviado como parámetro a dicha función.
*/

function metodo(numero,callback1,callback2){
    console.log(callback1(numero));
    console.log(callback2(numero));
};
var numero = 4
metodo(numero, numero => Math.pow(numero,2), numero => Math.pow(numero,3));


