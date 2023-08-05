'use strict';

const nombre = 'Jonatan';

const obtenerPosts = () =>{
    return ['Post1','Post2','Post3']
};

//Forma 1
// export default ()=>{
//     return {
//         nombre: 'Carlos',
//         correo: 'correo@correo.com',
//     };
// };

//Forma 2 - final del documento
const usuario =  () =>{
    return {
        nombre:'Carlos',
        correo: 'corre@correo',
    };
};

console.log('Soy codigo empty');
const correo = 'correo@correo';

// named Import
// import {nombre, obtenerPosts} from './namedExport';
// console.log('Mi nombre es ' + nombre)

console.log(nombre);
console.log(obtenerPosts());
console.log(usuario());
console.log(correo);
