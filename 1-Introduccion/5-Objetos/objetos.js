//Objetos: Un objeto es una colección de propiedades, y una propiedad es 
//una asociación entre un nombre (o clave) y un valor. 
// Nota: las funciones dentro de los objetos se les llama metodos

const persona = {
    nombre:'Carlos',
    edad: 27,
    correo: 'coreogmail.com',
    subcripcion:{
        correo: true,
        web:true,
    },
    coloresFavoritos:['Negro','Blanco'],
    saludo:function(){
        alert('Holas');
    },
};
console.log(persona.nombre);
persona.saludo();