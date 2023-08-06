
/*
  📌Ventana de confirmacion
  Una ventana donde el usuario puede aceptar o cancelar.
  Retorna verdadero o falso dependiendo de la respuesta de usuario
 */

// const ingresar = () =>{
//     const accesoPermitido = confirm("Eres mnayor de edad");
//     if(accesoPermitido ){
//         alert('Bienvenido');
//     }else{
//         alert('Lo sabran tus padres')
//     }
// }

/*
  📌Ventana con input
  Una ventana donde el usuario puede introducir un valor
  Retorna una cadena de texto con la respuesta del usuario
 */

const saludo = () =>{
    const nombre = prompt('Escribe tu nombre ')
    alert(`Hola ${nombre}`)
}