const contenedor = document.getElementById('contenedor1');

contenedor.addEventListener('click',(e) =>{
    console.log('Hiciste click en el contenedor');
});

const primeraCaja = document.querySelector('.caja');
primeraCaja.addEventListener('click', (e) =>{
       console.log('Hicistes click en la caja1');
});