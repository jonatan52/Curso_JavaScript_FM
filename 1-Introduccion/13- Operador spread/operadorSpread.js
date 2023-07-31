// 📌 Operador Spread - Permite tomar los elementos de un arreglo u objeto y expandirlo en otro sitio

const fruta = ['Manzana', 'Pera', 'Piña', 'Melon','Sandia'];
const comidaFavorita = ['Pizza','Sushi',...fruta]
console.log(comidaFavorita)

const datosLogin = {
    correo:'correo@correo',
    password:'12345'
}

const usario ={
    nombre:'Jonatan',
    edad:36,
    ...datosLogin
}
console.log(usario);

/*
  📌 Parametro Rest
  Permite que una funcion contenga un numeroindefinido de argumerntos.
  Los argumentos extra que encuentren los convertira en arreglo.
 */

const registarUsario = (nombre, correo,...datosAdicionales)=>{
    console.log(nombre,correo,datosAdicionales);
}
registarUsario('Jonatan','correo@correo');
registarUsario('Jonatan','correo@correo', 28,'españa');

/*
📌Destructuracion de objetos
Nos permite obtener elementos o propiedades de un arreglo u objetos y guardarlos en una variable
 */

const amigos = ['Villada', 'Oscar','Jorge'];
const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;
console.log(primerAmigo);
