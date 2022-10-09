// arreglos

const a=[1,2]
const b=[1,true,"hola",["A","B","c","d"]]
console.log(a)
console.log(b.length)
console.log(b[3][2])

// tambien se pueden crear arreglos a partir de un objeto y su constructor

const c=Array.of("x","y","z",9,8,7)

console.log(c)


const d=Array(100).fill(false) // se crea un array de 100 posiciones rellenados con el valor false

console.log(d)

//forma antigua de crear arrays

const e = new Array(1,2,3) // ya no se acostumbra a trabajar

console.log(e)

const colores=["Rojo","Verde","Azul"]

console.log(colores)

colores.push("Negro") //metodo similaar a append, al igual que python lo pone al final

console.log(colores)

colores.pop() //elimona el ultimo elmento del array

console.log(colores)

colores.forEach(function (elemento, index) {
    console.log(`<li> id="${index}">${elemento}</li>`)
})