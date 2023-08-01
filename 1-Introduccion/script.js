// alert("Hola mundo desde archivo externo")
/*
Escribe una función que tome 6 valores (a,b,c,d,e,f) como argumentos. 
Suma a y b. Luego reste por c. Luego multiplique por d y divida por e. 
Finalmente eleva a la potencia de f y devuelve el resultado. Consejo: cuidado con el orden.
 */

// function opercion(a,b,c,d,e,f){
//     let resultado = ((((a + b)-c)*d)/e)**f;
//     return resultado
// }

// console.log(opercion(6,5,4,3,2,1));
// console.log(opercion(6,2,1,4,2,3));
// console.log(opercion(2,3,6,4,2,3));

function myFunction(a, b){
if (a.includes(b)){
   a.b;
}else{
 b.a
}
return a + b;
}
console.log(myFunction('cheese', 'cake'))

function myFunction(a, b) {
    return a.indexOf(b) === -1 ? a + b : b + a
  }