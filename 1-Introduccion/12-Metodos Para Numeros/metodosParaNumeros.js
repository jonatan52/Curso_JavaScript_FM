/*
   📌 .toString() - convierte un numero a string
 */
const numero = 10;
console.log(numero, typeof numero);
const numerostring = numero.toString();
console.log(numerostring, typeof numerostring);

// 📌 .toFixed() coloca la cantidad de decimales que se le indique

const numeroPi = 3.1415;
console.log(numeroPi.toFixed(2));


// 📌 .parseInt() - Transforma un valor a un entero
// const numero1 = parseInt(prompt('escribir un numero: ')); 
// const numero2 = parseInt(prompt('escribir un numero: ')); 
// console.log(numero1 + numero2 );

// 📌 .parseFloat() - Transforma un valor a un mumero con decimal
// const numero3 = parseFloat(prompt('escribir un numero: ')); 
// const numero4 = parseFloat(prompt('escribir un numero: ')); 
// console.log(numero3 + numero4 );

// 📌 Math.ramdom() - Genera un numero al azar entre 0 y 1

const numeroaleatorio = Math.random();
console.log(numeroaleatorio);

console.log(Math.floor(10.1));// redondea hacia abajo un nuemero

console.log(Math.ceil(10.10));// redondea hacia arriba un nuemero

console.log(Math.round(10.1));// redondea al entero mas cercano
console.log(Math.round(10.99));// redondea al entero mas cercano

//ejemplo numero al azar entre 0 y 100
const randon2 = Math.random();
console.log(Math.floor(randon2 * 101));