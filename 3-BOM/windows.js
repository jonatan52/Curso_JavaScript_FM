// window.alert('Hola');
console.log(`La ventana de tu navegado mide ${window.innerWidth} px de ancho`);
console.log(`La ventana de tu navegado mide ${window.innerHeight} px de ancho`);

/*
  📌 window.open()
  Nos permite abrir ventanas de navegador
  Nota:Es posible que el navegador te pida permisos para abrir una nueva

  - 1er paramatro: Direccion de la  nueva ventana
  - 2do paramatro: Nombre de la ventana
  - 3er parametro: Cadena de textode opciones

  nos devuelve un objeto para acceder a esa ventana
*/
let ventana;
const abrirVentana =  () =>{
   ventana =  window.open('https://google.com', 'Mi nueva ventana', 'width=500, heigth=500');
};

const cerrarVentana = () =>{
    ventana.close();
}

console.log('ancho pantalla',window.screen.width);
console.log('alto pantalla',window.screen.height);