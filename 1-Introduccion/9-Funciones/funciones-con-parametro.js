// Funciones con prametros
// Prametros: Los valores especificados en la difinicion
// Argumentos: Los valores que le pasamos a la funcion cuando la invocamos
const saludo = (nombre = 'Amigo') =>{ // nombre = 'Amigo' se le cola en caso de que no defina un argumento
    console.log(`Hola ${nombre}`);
};
saludo('jonatan');

// 📌Funciones con multiple parametro

const operacion = (tipo,a,b) =>{
   
    if(tipo === 'suma'){
        console.log(a + b);
    }else if(tipo === 'resta'){
        console.log(a - b);
    }
};
operacion('suma', 2,5);
operacion('resta', 2,5);