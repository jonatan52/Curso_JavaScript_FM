const nombres = ['Carlos', 'Cristian', 'Estefania', 'Erika', 'Manuel', 'Camila'];

for(let i = 0; i < nombres.length; i++){
    if(nombres[i][0] !=='C'){ 
        // break; rompe el ciclo 
        continue; // continua 
    }
    console.log(nombres[i])
}