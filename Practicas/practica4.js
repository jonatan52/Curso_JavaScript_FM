/* 
 📌¿Cuántas veces aparece un personaje?
 Escriba una función que tome dos cadenas (a y b) como argumentos. 
 Devuelve el número de veces que a ocurre en b.

 Casos de prueba:

myFunction('m', 'how many times does the character occur in this sentence?')
Esperado
2
myFunction('h', 'how many times does the character occur in this sentence?')
Esperado
4
myFunction('?', 'how many times does the character occur in this sentence?')
Esperado
1
myFunction('z', 'how many times does the character occur in this sentence?')
Esperado
0
 */



// Solucion
function myFunction(a, b) {
    return b.split(a).length - 1
  }

  console.log(myFunction('m', 'how many times does the character occur in this sentence?'));