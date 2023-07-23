// 📌Scope = el alcance o ambito de las variables = desde que parte del codigo 
//   vamos a poder acceder a las variables
//   scope local o variables locales
//   solo podemos acceder a ellas desde dentro de la funcion
//   Podemos usar const, let y var

var obteneNumeroLetras = (nombre) =>{
    var numero = nombre.length;
    console.log(`${nombre } tiene ${numero } letras`);

    var funcioAnidada = () => {
        console.log(numero);// tambien se puede llamar por que esta drentro de la funcion
    };
    funcioAnidada();

};
obteneNumeroLetras('Alex');
// console.log(numero)//esta fuera del scope local