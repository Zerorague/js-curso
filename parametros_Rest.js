//son una forma de virtualmente ir agregando parametros infinitos *parametro (...)

function suma(...sumandos){
    let resultado=0

    sumandos.forEach(element => {
        resultado+=element
        
    });
    console.log(resultado)
}

suma(3,4,5,5,12)


//operador de propagacion o spread operator

const arr1=[1,2,3,4,5]
const arr2=[6,7,8,9,0]

console.log(arr1,arr2)

//crear un arr3 a partir de los arr1 y arr2

const arr3=[...arr1,...arr2]

console.log(arr3)