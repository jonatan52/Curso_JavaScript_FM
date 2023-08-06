/*
  📌getElementById
  Nos permite obtener un elemento en base a su atributo id
 */
const contenedor1 = document.getElementById('contenedor1');
console.log(contenedor1);

/*
  📌children
  Nos permite obtener los elemntos hijos
*/
  console.log(contenedor1.children);

/*
  📌parentElement
  Nos permite obtener el elemnto padre de un elemnto
*/
  console.log(contenedor1.parentElement);

/*
  📌getElementsByTagName
  Nos permite obtener una coleccion de elementos en base a la etiqueta.
  Nota: Devuelve una coleccion HTML. Una coleccion no es un arreglo
*/
const divs = document.getElementsByTagName('div');
console.log(divs);  

/*
  📌getElementsByClassName
  Nos permite obtener una coleccion de elementos en base a su clase css.
  Nota: Devuelve una coleccion HTML.
*/
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);  

/*
  📌querySelector
  Nos Nos devuelve el primer elemento que coincida con un selector estilo css
  Nota: Devuelve un nodeList.
*/
// const caja = document.querySelector('#contenedor1 .caja');
// console.log(caja);  

/*
  📌querySelectorAll
  Nos permite obtener una coleccion de elementos en base a un selector estilos css
  Nota: Devuelve un nodeList.
*/

// const cajas = document.querySelectorAll('#contenedor1 .caja');
// console.log(cajas)

/*
  📌closest
  Nos permite buscar de adentro hacia afuera en busca de un elemento
*/

const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
console.log(ultimaCaja)

console.log(ultimaCaja.closest('.contenedor-principal'));