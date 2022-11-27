import saludar, {PI,user} from "./constantes.js"
import {aritmetica as ari} from "./aritmetica.js"

console.log("archivo modulos")

console.log("Esto es una constante importada %f",PI)

console.log("esto es un usuario importado %s",user)


console.log(`esto es una suma desde un modulo ${ari.sumar(6,4,5,5,9,1,99999999,8,6)}`)

console.log(`esto es una multiplicacion desde un modulo aritmetica ${ari.multiplicar(2,3,4,204044,9999,9999999)}`)

saludar() //se exporta automaticamente ya que tiene la plabra default