//if-else

let edad= 35
let ciudad = "santiago"

if (edad>17 && ciudad==="linares") {
    console.log("puedes pasar")
} 
else{
    console.log("no puedes pasar")
}

// if-else-if-else if anidados

let hora = 24

if ((hora>=1 && hora <= 5) && (hora>=1 && hora <=24)){
    console.log("dejame dormir")
    
} 

else if ((hora>5 && hora <= 12) && (hora>=1 && hora <=24)){
    console.log("buenos dias")
    
} 
else if ((hora >12 && hora <= 18) && (hora>=1 && hora <=24)) {
    console.log("buenas tardes")
    
}
else if ((hora > 18 && hora<=24) && (hora>=1 && hora <=24)) {
    console.log("buenas noches")
    
}

else {
    console.log("fuera del rango horario")
    
}

//simplifacion de if else (operador ternario)
//consta de una condicion () ?  linea de codigo si verdadero: linea de codigo si es falsa
num=2
let esPar= (num%2===0)?
    "es par"
    :"es impar"
console.log(esPar) //operador ternario

//switch-case
//para evaluar diferentes valores para una misma variable
//domingo sera 0 y sabado 6
let dia=0
switch (dia) {
    case 0:
        console.log("Domingo")
        
        break;
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sabado")
        break;

    default:
        console.log("no es un dia")
        break;
}