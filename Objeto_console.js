//objeto console

console.log(console) //es un registro de lo que ha pasado en nuestra aplicacion

console.error("esto es un error") //se pinta en rojo

console.warn("esto es un aviso!") //se pinta en amarillo

console.info("esto es un mensaje informativo")

let nombre = "Julio",
apellido="san martin",
edad=29;

console.log(nombre,apellido,edad)

console.log("hola mi nombre es %s %s de %d años de edad",nombre,apellido,edad)

console.clear() //borra todo lo q esta en la consola

//console.dir(window)

console.group("curso de @jonatahMircha")
console.log("curso de javascript")
console.log("curso nodeJs")
console.log("curso Python")
console.log("curso FlexBox")
console.groupEnd()

console.groupCollapsed("curso de @jonatahMircha")
console.log("curso de javascript")
console.log("curso nodeJs")
console.log("curso Python")
console.log("curso FlexBox")
console.groupEnd()

console.clear()

console.table(Object.entries(console).sort())

const numeros =[1,2,3,4,5]
const vocales = ["a","e","i","o","u"]

console.table(numeros)
console.table(vocales)

const perro = {
    nombre:"Nube",
    Raza:"Kiltra",
    color:"Cafe"
}

console.table(perro)

esPrimo=(num)=>{
    let count=0
    let div=(parseInt((num**(1/2)))+1)
    if (num===2) {
        console.info("es primo")  
        return 1  
    }

    else if (num<2) {
        console.info("no es primo")  
        return 0
    }

    rango=()=>{
        rango=[]
        for (let index = 1; index <= div; index++) {
            rango.push(index)
            
        
        }
        return rango 
    }

    rango().forEach(element => {
        if (num%element===0) {
            count++
        }
               
    })
    if (count>1) {
        console.info("no es primo")
        return 0
    
        
    } else {
        console.info("es primo")
        return 1
    }


}



console.time("cuanto tarda esPrimo")

esPrimo(99999999999)

console.timeEnd("cuanto tarda esPrimo")


for (let index = 0; index <= 100; index++) {
    console.count("codigo for")
    console.log(index)   
}
let x =3,
y=2,
pruebaXY="se espera que x sea menor que y"


console.assert(x<y,{x,y,pruebaXY}) //testing