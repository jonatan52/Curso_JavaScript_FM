/*
   📌 .map()
   Nos permite ejecutar una funcion por cada elemento y crear un nuevo arreglo
   en base a los resultados de esa funcion.
 */
const frutas = ['Mango', 'Manzana', 'Melon', 'Sandia'];

const frutasMayusculas = frutas.map((fruta)=>{
    return fruta.toUpperCase();
});
console.log(frutasMayusculas)

const frutasMinusculas = frutas.map((fruta) =>  fruta.toLowerCase());
console.log(frutasMinusculas)

// 📌 .filter()
// Nos permite ejecutar una funcion por cada elemento y luego crea un arreglo en 
//  base a los resultados de esa funcion

const frutasCuatroletras = frutasMayusculas.filter((nombre)=>{
    if(nombre.length === 5){
        return nombre;
    }
});
console.log(frutasCuatroletras);