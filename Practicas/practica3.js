// 📌Comprobar si un número es par
// Escribe una función que tome un número como argumento. 
// Si el número es par, devuelve verdadero. De lo contrario, devuelve falso
//Solucion 1
function espar(a){
    if(a % 2 === 0){
        return (`${a} es un numero par`)
    }else{
        return (`${a} es un numero impar`)
    }
   
}
console.log(espar(11))




// Solucion 3
function myFunction(a) {
    return a % 2 === 0
  }

  console.log(myFunction(5))