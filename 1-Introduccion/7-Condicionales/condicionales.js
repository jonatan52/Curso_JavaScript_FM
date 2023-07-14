// 📌 Condicionales

// 📌Ejemplos # 1
// const usuario = {
//     edad:27,
//     pais:'Mexico',
//     ticket: true,
// }

// if (usuario.edad >= 18 && usuario.ticket){
//     console.log('Es mayor de edad y tiene ticket')
// }else{
//     console.log('Es menor de edad o no tiene ticket')
// }

//📌Ejemplos # 2 Anidando condicional
// const usuario = {
//     edad:15,
//     pais:'Mexico',
//     ticket: false,
// }

// if (usuario.edad >= 18 ){
//     if(usuario.ticket){
//         console.log('El usuario es mayor de edad y tiene un ticket.');
//     }else{
//         console.log('El usuario es mayor de edad, pero no tiene ticket.');
//     }
// }else{
//     console.log('el usuario es menor de edad');
// }

//📌Ejemplos # 3 elseif
const usuario = {
    edad:15,
    pais:'Mexico',
    ticket: false,
}

if(usuario.pais === 'Mexico'){
    console.log('El usuario es de mexico');
}else if(usuario.pais === 'Colombia'){
    console.log('El usuario es colombiano');
}else{
    console.log('el usuario es de otro pais');
}