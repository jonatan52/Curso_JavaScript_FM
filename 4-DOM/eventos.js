const boton1 = document.getElementById('boton1');
const primeraCaja = document.querySelector('.caja');

boton1.addEventListener('click', (e) =>{
    console.log(e)
    primeraCaja.classList.toggle('activa');
});

/*
 📌 Agregando el evento a multiples elementos
 Podemos agrgar el evento a multiples elementos recorriendolos mediante un ciclo.
 Nota: Esta no es la forma mas optima, en la proxima clase veremos una mejor forma
*/

const cajas = document.querySelectorAll('.caja');
cajas.forEach((caja) =>{
    caja.addEventListener('click', (e)=>{
        console.log(`Haz echo click en caja: ${e.target.innerHTML}`);
    });
});

