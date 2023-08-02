/*
📌Ciclo forEach
Esa un metodo de los arreglos que podemos usar para recorrer los elementos
 */

// const amigos = ['Anderson', 'Jorge', 'Oscar'];
// amigos.forEach((amigo, index)=>{
//     console.log(`El amigo # ${index} es: ${amigo}`)
// });

/*
📌Ciclo for in
Nos permite recorrer las propiedades de un objeto
*/
// const persona = {
//     nombre:'Jonatan',
//     edad:36,
//     correo:'correo@correo.com'
// };

// for(propiedad in persona){
//     persona[propiedad ]
// }

/*
 📌 Ciclo for of
    Nos permite recorrer los valores de un objeto iterable.
    Podemos recorrer: Arreglos, Cadenas de texto, mapas y lista de nodos, etec.
*/
const etiquetas = document.head.children;
console.log(etiquetas);

// for(elemento of etiquetas){
//     console.log(elemento)
// }

[...etiquetas].forEach((elemento)=>{
    console.log(elemento)
});
