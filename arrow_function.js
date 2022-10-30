//es una nueva forma de definir funciones anonimas expresadas

//funcion declarada
const saludar = function (){
    console.log("hola mundo")}
saludar()

// arrow function

const adios = nombre => console.log(`adios ${nombre}`)

adios("mundo")

const sumar = (...sumandos) =>{
    resultado=0
    sumandos.forEach(element =>resultado+=element);
    return resultado
} // en cosas mas simples el return esta de forma implicita

console.log(sumar(3,5,10,2))

function perro () {
    console.log(this)
}

perro()