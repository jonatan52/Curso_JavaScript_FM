/*📌Promesas:

 */

const promesa = new Promise((resolve, reject) =>{
    // Accion que se ejecutara
    setTimeout(()=>{
        const exito = false;
        if(exito){
            resolve('La operacion tuvo exito');
        }else{
            reject('La opercion no tuvo exito');
        }

    }, 4000);
});

promesa.then((mensaje)=>{
    alert(mensaje);
})

promesa.catch((mensaje)=>{
    alert(mensaje);
})