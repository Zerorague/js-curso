// # 1) Programa una función que cuente el número de caracteres de una cadena de texto, 
// # pe. miFuncion("Hola Mundo") devolverá 10.

let contadorCaracteres=(palabra="") =>
    (!palabra)
    ?console.warn("la cadena de texto esta vacia")
    :console.log(`la cadena "${palabra}" tiene ${String(palabra).length} caracteres`)

contadorCaracteres("aguardiente")














/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

let truncarPalabra=(palabra="",limit=0)=>(!palabra)
    ?console.warn("la cadena de texto esta vacia")
    :console.log(String(palabra).slice(0,limit))      

truncarPalabra("hola mundo",3)

/*3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/


let separador = (cadena="",separador=undefined) => (!cadena)
    ?console.warn("la cadena esta vacia")
    :(separador===undefined)
        ?console.warn("olvido definir un separador")
        :cadena.split(separador)

console.log(separador("hola que tal estas pete pete","e"))










/*4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */


let repetir=(palabra,cantidad)=> console.log(palabra.repeat(cantidad))

repetir("hola mundo",3)