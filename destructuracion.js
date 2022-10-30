//destructuring es lo mismo que el desempaquetado de listas o arreglos

const numeros =[1,2,3]

let uno = numeros[0]
let dos =numeros[1]
let tres =numeros[2]

console.log(uno,dos,tres) //sin destructuracion


//con destructuracion

const [one,two,three] = numeros
console.log(one,two,three)

const persona ={
    nombre:"Julio",
    apellido:"San Martin",
    edad:29
} //nombre apellido y edad son propiedades de persona

const {nombre,apellido,edad}=persona

console.log(nombre,apellido,edad)

