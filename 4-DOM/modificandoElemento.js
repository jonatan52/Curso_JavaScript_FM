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

/*
  📌elemento.setaAttribute()
  Nos permite agregar o establecer el valor de un atributo del elemento
*/
primeraCaja.setAttribute('class', 'caja activa');
primeraCaja.setAttribute('data-id', '123-456-789');

/*
  📌elemento.style.property()
  Nos permite cambiar estilos css de un elemento
*/

const contenedor2Caja1 = document.querySelector('#contenedor2 .caja');
contenedor2Caja1.style.background = '#000';
contenedor2Caja1.style.color = '#fff';
contenedor2Caja1.style.textTransform = 'uppercase';

