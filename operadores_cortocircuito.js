/*
Cortocircuito OR cuando el valor de la izquierda en la expresion siempre pueda validar true, es el valor que se cargara por defecto

Cortocircuto AND cuando el valor de la izquierda en la expresion siempre pueda validar a false, es el valor que se cargara por defecto
*/

function saludar (mensaje="Mundo"){
    console.log(`hola ${mensaje}`)
}

//operador cortocircuitp

function saludarCorto (mensaje){
    mensaje=mensaje || "Mundo" //operador cortoCircuito OR

    console.log(`hola ${mensaje}`)
}

saludar()
saludarCorto("Julio")