// 📌 Herencia

// clase Usuario
class Usuario{
    constructor(usuario, password){
        this.usuario = usuario;
        this.password = password;
    }

    obtenerPost(){
        const post = ['post1','post2']
        return post;
    }
}

// Clase Moderador que hereda de la clase Usuario
class Moderador extends Usuario{
    constructor(usuario, password, permisos){
    super(usuario, password);
    this.permisos = permisos;
    }

    borrarPost(id){
        if(this.permisos.includes('borrar')){
            console.log(`El post con el # ${id} fue borrado `);
        }else{
            console.log('No tiene permiso par borrar')
        }
    }
}

const usuario = new Usuario('Carlos', 123);
console.log(usuario.obtenerPost());

const usuario2 = new Moderador('Jorge', 456, ['borrar','editar']);
console.log(usuario2.obtenerPost());
console.log(usuario2.permisos);
usuario2.borrarPost(7);
