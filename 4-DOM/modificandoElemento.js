/*
  📌elemento.innerHTML
  Nos permite cambiar el contenido de html de un elemento
 */

const primeraCaja = document.querySelector('.caja');
primeraCaja.innerHTML = 'Hola';

/*
  📌elemento.attribute
  Nos permite acceder y cambiar atributos del elemneto.
*/

primeraCaja.id = 'nuevo-id';