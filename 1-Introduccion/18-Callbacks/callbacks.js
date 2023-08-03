//📌 Callbacks: Una función de callback es una función que se pasa a otra función 
//   como un argumento, y que se ejecuta depues que se halla completado cualquier operacion


const obtenerPostUsuario = (usuario, callback)=>{
    console.log(`Obteniendo los post de ${usuario}...`);

    setTimeout(()=>{
        let posts =['Post1','Post2','Post3'];   
        callback(posts)
    },2000);
}

obtenerPostUsuario('Carlos', (posts) =>{
    console.log(posts);
})

