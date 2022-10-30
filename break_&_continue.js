const numeros = [1,2,3,4,5,6,7,8,9,10]

for (let index = 0; index < numeros.length; index++) {
    if (index ===5){
        break // se sale de la estructura en la que esta
    }
    console.log(numeros[index])
    
}

for (let index = 0; index < numeros.length; index++) {
    if (numeros[index]%2===0){
        continue // se salta un ciclo
    }
    console.log(numeros[index])
    
}