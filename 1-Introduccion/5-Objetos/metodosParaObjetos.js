const usuario = {
    nombre : 'Jonatan',
    edad: 36,
    amigos:['Alejandro', 'Cesar', 'Manuel'],
    saludo:()=>{
        console.log('Hola');
    }
};

/*
 📌 object.keys()
 nos devuelve un arreglo con las llaves (keys) del objeto 
 */
const resultado = Object.keys(usuario);
console.log(resultado);

/*
 📌 object.values()
 nos devuelve un arreglo con los valores (values) del objeto 
 */
 const valores = Object.values(usuario);
 console.log(valores);

 /*
 📌 object.entries()
 nos devuelve un arreglo con los valores (values) del objeto 
 */
 const llaveValor = Object.entries(usuario);
 console.log(llaveValor);