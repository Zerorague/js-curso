//manejo de errores try catch finally

let div = (n1,n2) => n1/n2
try  {
    if (isNaN(div(10,0))) {
        throw new Error("no se puede dividir entre 0")
    }
    console.log(div((10,2)))
    
} catch (error) {
    console.log(`Se produjo ${error}`)
} finally {
    console.log("vuelva a intentarlo")
    console.log(div(10,2))

} //el bloque finally se ejecutara siempre al final de un bloque try-catch


try {
    let numero = "a"
    if (isNaN(numero)) {
        throw new Error("el caracter introducido no es un numero") //para definir errores
    }
    
} catch (error) {
    console.log("se produjo el siguiente error "+error)
}

console.log(div(10,2))