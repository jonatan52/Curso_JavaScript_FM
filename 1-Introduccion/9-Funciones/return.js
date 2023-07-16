const operacion = (tipo, a, b) =>{
    if(tipo === 'suma'){
        return a + b;
    }else if(tipo === 'resta'){
        return a - b;
    }
};
const variable = operacion('suma', 2,5);
const variable2 = operacion('resta', 2,5);

console.log(variable )