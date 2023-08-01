
  /*
Escribe una función que tome 6 valores (a,b,c,d,e,f) como argumentos. 
Suma a y b. Luego reste por c. Luego multiplique por d y divida por e. 
Finalmente eleva a la potencia de f y devuelve el resultado. Consejo: cuidado con el orden.
 */

function opercion(a,b,c,d,e,f){
    let resultado = ((((a + b)-c)*d)/e)**f;
    return resultado
}