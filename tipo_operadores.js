// operadores basicos

/* Aritmeticos + - * / % () */

let a = 5 + (5 - 10) * 3
let modulo = 5%2

console.log(a)
console.log(modulo)

//operadores relacionales > < >= <= == === != !==

console.log(8 > 9) //false
console.log(9 > 8) //true
console.log(8>=9) //false
console.log(9>=9) //true

console.log(9==9) //true
console.log(9=="9") //true
console.log(9==="9") //false
console.log(false==0)//true
console.log(false===0)//true

// = asignacion de variable
// == comparacion de valores donde los tipos pueden ser distintos
// === comparacion de valor y tipo de datos

//es buena practica con triple comparacion


//operadores  de incremento y decremento
//la capacidad de una variable para aumentar su valor o disminuir

let incremento =1
incremento = incremento+2 //se incrementa el valor en 2
console.log(incremento)

incremento+=3
console.log(incremento) // esto igual sirve para incrementar

incremento**=2 //estoy elevando a 2
console.log(incremento)

//operador unario (de uno en uno)

incremento++
console.log(incremento)
++incremento //no usar esta forma
console.log(incremento)
incremento--
console.log(incremento)

//operadores logicos

// ! Not ¬
// || or o v
// && and y ^

console.log(!true) //devuelve false
console.log(!false) //devuelve true
console.log((9===9) || ("9"===9) ) //devuelve true ya que una se cumple
console.log((9===9) && ("9"===9) ) //devuelve false ya que una no se cumple