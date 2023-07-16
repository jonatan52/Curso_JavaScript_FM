// 📌funciones
/*En JavaScript, una función es un bloque de código reutilizable diseñado para realizar una tarea específica. 
Es una de las características fundamentales de JavaScript y se utiliza para organizar y estructurar el código 
en módulos lógicos y reutilizables.

Las funciones en JavaScript pueden tomar parámetros (valores de entrada), realizar un conjunto de instrucciones
 y devolver un valor (valor de salida). Las funciones se definen utilizando la palabra clave function seguida 
 por un nombre que identifica a la función. Aquí tienes un ejemplo básico de una función en JavaScript:*/

//Forma # 1
// function saludo(){
//     console.log('Hola mundo')
// }

// saludo()

// //Forma # 2 - asignando una funcio a una variable
// const saludo = function(){
//     console.log('Hola mundo desde la variable');
// }
// saludo();

//Forma # 3 -> funciones tipo flecha 
// saludo = () => console.log('Hola mumdo'); se puede crear en una sola linea
saludo = ( ) => {
    console.log('Hola funciones flecha');
}
saludo();