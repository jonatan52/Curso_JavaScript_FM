/*
  📌Modificando estilos css mediante clases
*/
const primeraCaja = document.querySelector('#contenedor1 .caja');
// console.log(primeraCaja.classList);

//Funcion agregar clase
const agregarClase = () => {
    primeraCaja.classList.add('activa'); // classList.add() nos permite agregar clases a un elemento
};

//Funcion eliminar clase
const eliminarClase = () => {
    primeraCaja.classList.remove('activa');// classList.remove() nos permite eliminar clases a un elemento
};

//Funcion alternar clase
const toggleClase = () => {
    primeraCaja.classList.toggle('activa');// classList.toggle() nos permite alternar clases a un elemento
};

//Funcion comprobar clase
const comprobarClase = () => {
    if(primeraCaja.classList.contains('activa')) {
        console.log('La caja tiene la clase activa')
    }else{
        console.log('La caja no tiene la clase activa')
    }     
};


