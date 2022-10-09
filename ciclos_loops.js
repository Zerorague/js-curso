let contador= 1
// while (contador <= 10){
//     console.log(`este el numero ${contador}`)
//     contador++

//}

// switch (contador) {
//     case 0:
//         console.log(`do while ${contador} se ejecuta al menos una vez`)
//         contador++
        
//         break;

//     default:
//         do {
//             console.log(`do while ${contador}`)
//             contador++
//         } while(contador<10)
//         break;
// }


//ciclo for

for (let inicializacionVariable=0;inicializacionVariable<10;inicializacionVariable++){
    console.log("for "+inicializacionVariable)

}

//con listas o arregloes (for)

let numeros=[10,20,30,40,50,60,70,80,90,100,"esto fue un arreglo recorrido por un ciclo for y forEach"]

for (let i=0;i<numeros.length;i++){
    console.log(numeros[i])
}

//recorrido con for each me permite usar funciones

numeros.forEach(element => {
    console.log(element)
});



// con for in es un for especial para un objeto (es como for in de python)

const persona={
    nombre:"Karina",
    apellido:"Moya",
    trabaja:"si"
}

for (const key in persona) {
    console.log(`key:${key} : value:${persona[key]}`)
}

//for of me permite recoorer cualquier objeto iterable (objetos,arrwglos,tuplas, etc)

for (const iterator of "persona") {
    console.log(iterator)
    
}