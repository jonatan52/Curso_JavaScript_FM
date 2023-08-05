// named Import
// import {nombre, obtenerPosts} from './namedExport';
// console.log('Mi nombre es ' + nombre)

// console.log(obtenerPosts)

// namespace Import
import * as datos from './namedExport';
console.log(datos.nombre);
console.log(datos.obtenerPosts());

// default Import
import  usuario  from './defaultExport';
console.log(usuario());

// Empty Import : Carga todo el codigo pero sin hacer ningun objeto
import './emptyExport';
import {correo} from './emptyExport';
console.log(correo);
