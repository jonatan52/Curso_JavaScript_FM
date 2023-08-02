// Clases: Las clases de JavaScript son plantillas para objetos de JavaScript.
// porpiedades:La clase puede contener variables.Dentro de una clase se llaman propiedades
// Constructor: Es un metodo especial para inicializar un objeto creado apartir de una clase
// Metodos: las clases pueden contener funciones. Dentro de una clase se llaman metodos

// clase
class Usuario{
    // propiedades
    tipo = 'usuario';

    // Constructor
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;     
   }

   // Metodos
   obtenerNombreCompleto(){
      console.log('Obteniendo datos..')
      return `${this.nombre } ${this.apellido}`;
     

   }
}
// Creacion de un nuevo objeto de clase Usuario
const usuario = new Usuario('Carlos', 'Esparza');
console.log(usuario.obtenerNombreCompleto());

const usuario2 = new Usuario('Jonatan', 'Tarriba');
console.log(usuario2.obtenerNombreCompleto());



