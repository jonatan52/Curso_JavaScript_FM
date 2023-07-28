/*
  📌 .length:  devuelve el numero  de caracteres de una cadena de texto 
 */

const texto = 'Hola soy Jonatan'
console.log(texto.length)

/*
  📌 .indexOf()  devuelve el indice del primer caracter especificado
      .lastIndexOf()   :  devuelve el indice del ultimo caracter especificado
 */

console.log(texto.indexOf('o'));   
console.log(texto.lastIndexOf('o'));   

/*
  📌.slice() - Devuelve un fragmento de una cadena de texto.
    1er parametro - index desde donde queremos cortar
    2do parametro (opcional) - index hasta donde queremos cortar
 */
const saludo = 'Hola yo soy jonatan!';
console.log(saludo.slice(12));
console.log(saludo.slice(12, 19));


/*
  📌.replace() - Devuelve una cadena de texto en donde remplaza un valor po otro
    1er parametro - texto que queremos remplazar
    2do parametro - el texto que queremos poner
 */

const texto2 = 'Hola soy programador';
console.log(texto2.replace('programador','ingeniero'));

/*
  📌.split() - Convierte una cadena de texto en un arreglo.
    Tenemos que ecpecificar donde cortar cada elemento
    1er parametro - el caracter que funcionara como separador.
 */
const texto3 = 'Hola soy diseñador';
console.log(texto3.split(' '))

console.log(texto3.toUpperCase())// imprime el texto en mayuscula
console.log(texto3.toLowerCase())// imprime el texto en minuscula
