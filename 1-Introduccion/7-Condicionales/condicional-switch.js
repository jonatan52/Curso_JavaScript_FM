/*
switch
La declaración switch evalúa una expresión, comparando el valor de esa expresión 
con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las 
declaraciones en los case que siguen.
*/

const usuario ={
    nombre:'Carlos',
    pais:'chile'
};

switch(usuario.pais){
    case 'mexico':
        console.log('El usario es mexicano');
        break;

    case 'Colombia':
        console.log('El usario es colombiano');
        break;

    case 'argentina':
        console.log('El usario es argentino');
        break;  
        
    default:
        console.log('Es de otro pais'); 
}

