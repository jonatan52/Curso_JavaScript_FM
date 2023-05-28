/* 📌 Operadores Arimeticos
= Operador de asignacion. se usa para asignar valores a una variable
+ Suma
- Resta
* Multiplicacion
/ Division
% Modulo
++ Aumento
-- disminucion
 */

/* 📌 Operadores de asignacion
+= Suma
-= Resta
*= Multiplicacion
/= Division
%= Modulo
 */

/* 📌 Operadores Logicos
&& AND
|| OR
!  NOT
 */

const nombre = 'Carlos';
const edad = 17;
const entrada = true;
const tienePermiso = true;

// const permitirAcceso = edad >= 18 && entrada ;
// console.log("Acceso permitido al concierto " + entrada)

const permitirAcceso = (edad >= 18 && entrada) || (tienePermiso && entrada);
 console.log("Acceso permitido al concierto " + entrada)