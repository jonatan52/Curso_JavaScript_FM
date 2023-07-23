// 📌Scope = el alcance o ambito de las variables = desde que parte del codigo 
//   vamos a poder acceder a las variables
//   scope global o variables globales
//   Podemos acceder a ellas desde cualquier parte del codigo
//   Podemos usar const, let y var

var nombre = 'Carlos';
console.log(nombre);

const saludo = ()=>{
    console.log('Hola ' + nombre)

    nombre = 'Arturo';
    console.log('El nuevo nombre es ' + nombre);
}

saludo()