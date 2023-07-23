/*📌 Block Scope / Alcance de tipo bloque 
    -Pertenece las variables declaradas con const o let dentro de un bloque {}
    -solo podemos acceder a ella dentro del bloque
*/

const edad = 19;
if(edad >= 18){
    const accesoPermitido = true;

    if (true){
        console.log(accesoPermitido);
    }
    
    const miFuncion = () =>{
       console.log(accesoPermitido)
   };
   miFuncion();

}
// console.log(accesoPermitido);