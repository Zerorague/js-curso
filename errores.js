//manejo de errores try catch finally

const div = (n1,n2) => n1/n2

try  {
    console.log(div(10/0)) //en el try se agrega el codigo a evaluar
} catch (error) {
    console.log("no se puede dividir entre 0") //captura cualquier error del try
} finally {
    console.log("siempre se ejecuta")

} //el bloque finally se ejecutara siempre al final de un bloque try-catch
