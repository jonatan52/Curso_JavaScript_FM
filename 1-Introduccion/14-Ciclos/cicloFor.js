/*
  📌Ciclo For: Repite un bloque de codigo mientras se cumpla una condicion

    Expresion 1: se ejecuta una sola vez antes de comenzar a repetir el bloque de codigo
    Expresion 2: Una condicion, mientras se cumpla se ejcutara del bloque de codigo.
    Expresion 3: Esta expresion se ejecutara siempre y despues de se ejecute el bloque de codigo
 */
// for(let i=0; i<10; i++){
//     console.log('numero ' + i)
// }


console.log('---------------  Nombres ---------------------------------')
const nombres = ['Carlos', 'Cristian', 'Estefania', 'Erika', 'Manuel'];
nombres.forEach((nombre)=>{
    console.log(nombre)
})// recorrer un arreglo 

console.log('---------------  Frutas ---------------------------------')
const frutas = ['Mango','Pera','Sandia','Sapote','Uvas']
for(let fruta = 0; fruta < frutas.length; fruta ++){ // recorrer e imprimir los elementos de un arreglo
    console.log(frutas[fruta])
}

console.log('---------------  Nueros hacia atras ---------------------------------')
for(let i = 50; i > 0; i--){
    console.log(i)
}
