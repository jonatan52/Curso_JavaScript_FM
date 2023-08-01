// Escriba una función que tome dos cadenas (a y b) como argumentos. 
// Si a contiene b, agregue b al comienzo de a. Si no, añádelo al final. 
// Devolver la concatenación en javascript.

//    Casos de prueba:

// myFunction('cheese', 'cake')
// Esperado
// 'cheesecake'

// myFunction('lips', 's')
// Esperado
// 'slips'

// myFunction('Java', 'script')
// Esperado
// 'Javascript'

// myFunction(' think, therefore I am', 'I')
// Esperado
// 'I think, therefore I am'

function myFunction(a, b) {
    return a.indexOf(b) === -1 ? a + b : b + a
  }

  console.log(myFunction('cheese', 'cake'))