/*
Una funcion es un bloque de codigo, autocontenido, que se puede definir
una vez y ejecutar en cualquier momento.
Opcionalmente, una funcion puede aceptar parametros y devolver un valor.

las funciones en JavaScript son objetos, un tipo especial de objetos:

Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, 
y pueden pasarse como argumentos u usarse como valor de retorno


*/


// funciones en JavaScript :D

//Funciones declaradas y funciones expresadas

//funcion declarada ↓

function Suma(a,b) {
    console.log("esto es una suma")
    return a+b
    
}

function saludar(nombre="Desconocido",edad=0) {
    return `Hola ${nombre} de ${edad} años`
}

// invocacion de funcion ↓

let saludo = saludar() // si no paso parametros toma los valores por defecto
console.log(saludo) //devuelve hola julio de 29 años
//------------------------------------------------
let resultado = Suma(2.5,5)
console.log(resultado)

// funciones declaradas vs funciones expresadas
funcionDeclarada() // el scope sube la funcion declarada y permite invocarla incluso antes de declararla
function funcionDeclarada() {

    console.log(`esto es una funcion declarada \npuede invocarse en cualquier parte de nuestro\ncodigo\n incluso antes de que la funcion sea declarada`)

    
}

funcionDeclarada()

// funciones expresadas
// funcion anonima
//funcionExpresada()

const funcionExpresada = function() {
    console.log(`esto es una funcion expresada es decir\n una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su definicion\n javaScript nos dira..."before initializacion"`)
    
}

funcionExpresada()

