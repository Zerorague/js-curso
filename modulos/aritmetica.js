let sumar=function(...numeros) {
    let mem=0
    numeros.forEach(num => {
        mem+=num 
    });
    return mem
}


let multiplicar = function (...factores){
    let resultado=1
    factores.forEach(element => {
        resultado*=element
    });
    return resultado
}


export const aritmetica ={ //exportando todo junto como un objeto
    sumar,
    multiplicar
}


