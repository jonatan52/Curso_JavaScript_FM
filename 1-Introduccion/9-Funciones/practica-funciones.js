/*
📌 Reto: Cálculo de descuentos

Descripción del problema:
Imagina que estás desarrollando un sistema de compras en línea y necesitas calcular el precio 
final de un producto después de aplicar descuentos. Tienes las siguientes reglas de descuento:

Si el precio del producto es mayor o igual a $100, se aplica un descuento del 20%.
Si el precio del producto es mayor o igual a $50 y menor a $100, se aplica un descuento del 10%.
Si el precio del producto es menor a $50, no se aplica ningún descuento.
Tu tarea es escribir una función llamada calcularPrecioConDescuento que tome como parámetro el precio original 
del producto y devuelva el precio final después de aplicar el descuento correspondiente.

Instrucciones:

Define la función calcularPrecioConDescuento que tome un parámetro llamado precioOriginal.
Dentro de la función, utiliza una estructura condicional para verificar las reglas de descuento y 
calcular el precio final.
Retorna el precio final después de aplicar el descuento.
Prueba la función con diferentes valores de precio y verifica que los descuentos se apliquen correctamente.
Ejemplo de uso:

javascript
Copy code
console.log(calcularPrecioConDescuento(120));  // Debe imprimir 96 (20% de descuento)
console.log(calcularPrecioConDescuento(75));   // Debe imprimir 67.5 (10% de descuento)
console.log(calcularPrecioConDescuento(30));   // Debe imprimir 30 (sin descuento)
¡Intenta resolver el reto y si tienes alguna pregunta, no dudes en preguntarme!

 */

//Solucion
const calcularPrecioConDescuento =  (precio) => {
    let precioFinal;
    if(precio >= 100){
    //Aplicar descuento del 20%
       const descuento = precio * 0.20;
       precioFinal = precio - descuento;
    }else if(precio >= 50 && precio < 100 ){
        //Aplicar descuento del 10%
       const descuento = precio * 0.10;
       precioFinal = precio - descuento;
       
    }else{
        // noo se aplica descuento
        precioFinal = precio;
    
    }
    return precioFinal;
}

console.log(calcularPrecioConDescuento(30))