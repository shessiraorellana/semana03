/*
6. Crea una función usando callbacks, que reciba una condición, 
y dos funciones que se realicen en caso la condición se cumpla o no. 
*/
var miArreglo = [1,2,3,4,5,6,7];
function nuevaFuncion(array,callback1,callback2){
    array.forEach(element => {
        if(element%2==0){
            callback1(element);
        }else{
            callback2(element);
        }
    });
};

nuevaFuncion(miArreglo,(n)=> console.log(`Es un numero Par: ${n}`),(n)=> console.log(`Es un numero Impar: ${n}`))







