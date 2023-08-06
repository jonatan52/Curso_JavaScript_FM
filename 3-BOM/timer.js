/*
  📌 window.setTimeOut()
  Nos permite ejecutar una funcion despues de cierto tiempo
*/

// const saludo = () =>{
//     console.log('Hola')
// };

// let id;
// const iniciar = () =>{
//     console.log('iniciando timer');
//     id = setTimeout(saludo, 5000);
// };

// const detener = () =>{
//     console.log('Deteniendo el timer');
//     clearTimeout(id)

// };

/*
  📌 window.setInterval()
  Nos permite ejecutar una funcion cada cierto tiempo
*/

let cuenta = 0;
let id;

const iniciar = () =>{
    id = setInterval(() =>{
        console.log(cuenta);
        cuenta++;
    }, 1000);
}

const detener = () => {
    console.log('Deteniendo la cuenta')
    clearInterval(id);
}