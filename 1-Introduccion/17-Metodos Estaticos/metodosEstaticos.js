// 📌 Metodos Estaticos

class Usuario {
    constructor(nombre, correo){
        this.nombre = nombre;
        this.correo = correo;
    }

    static borraUsuario(id_usuario){
        console.log(`El usuario ${id_usuario} ha sido borrado de la BD`);
    }
    
    static usariosRegistrados = 1000;
}
// const usuario = new Usuario('carlos ', 'correo@correo.com');
Usuario.borraUsuario(1);
console.log(Usuario.usariosRegistrados);