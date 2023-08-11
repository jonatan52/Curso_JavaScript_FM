const eliminarCaja = () =>{
    const contendorpadre = document.getElementById('contenedor1');
    const cajaEliminada = contendorpadre.querySelector('.caja');
    // console.log(cajaEliminada);

    if(cajaEliminada){
        contendorpadre.removeChild(cajaEliminada);
    }
    
};