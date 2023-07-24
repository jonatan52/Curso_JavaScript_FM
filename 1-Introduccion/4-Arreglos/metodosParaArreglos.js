const colores = ['Amarillo ', 'Azul ', 'Rojo'];
// (propiedaes)
// 📌length: Nos permite conocer la cantidad de elementos de un arreglo
// console.log(arreglo.length)


// 📌 .toString: Nos permite transformar un arreglo a una cadena de texto
//     por ejemplo para poder mostrarlo en el navegador.
// document.body.innerHTML = colores.toString();

// 📌 .join() nos permite transformar un arreglo a una cadena de texto y separa cada elemento 
console.log(colores.join('*'));

// 📌 .sort()
// Nos permite oredenar un arreglo de cadenas de texto, de forma alfabeticamente

const letras = ['c','d','b','a'];
console.log(letras.sort()); // tambien organiza numeros

// 📌 .reverse()
// Nos permite oredenar un arreglo de forma descendente
console.log(letras.reverse());


// 📌 .concat()
// Nos permite juntar dos arreglos en uno solo
const numero = [1,2,3,4];
const letra2 = ['A', 'B', 'C', 'D'];
const arreglo3 = numero.concat(letra2);
console.log(arreglo3);


// 📌 .push()
// Nos permite agregar un elemento al final de un arreglo

colores.push('Amarillo');
console.log(colores);

// 📌 .pop()
// Nos permite eleminar el ultimo elemento de un arreglo.

colores.pop();
console.log(colores);

// 📌 .shift()
// Elimina el primer elemento de un arreglo y recorre los elementos
const diaSemana = ['lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
diaSemana.shift();
console.log(diaSemana);

// 📌 .unshift()
// Agrega un  elemento al inicio del  arreglo y empuja los elementos

diaSemana.unshift('nuevo dia');
console.log(diaSemana);

// 📌 .indexOf()
// Obtenemos el primer index de un elemento
// si no hay elementos nos retorna -1

const nombres = ['Carlos', 'Jonatan', 'Luisa', 'Rafael']
console.log(nombres.indexOf('Jonatan'));

// 📌 .lastIndexOf()
//  obtenemos el ultimo index de un elemento.
console.log(nombres.lastIndexOf(''));

//----------------------------------------------------------

/*
  📌 .forEach()
  Nos permite ejecutar una funcion por cada elemento
*/

const paises = ['Colombia', 'Nicaragua', 'Mexico', 'peru'];
paises.forEach((pais, index) =>{
    console.log(`pais ${pais} (${index})`);
})

/*
  📌 .find()
  Nos permite recorrer un arreglo y devuelve el primer elemento que retornamos
*/

const resultado = paises.find((pais) =>{
    if (pais[0] === 'N'){
        return pais;

    }
});
console.log(resultado);