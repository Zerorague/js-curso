// son una nueva forma de escribir atributos y metodos

let nombre = "Julio"
let edad = 7

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log("guau guau!")
    }
}

perro.ladrar()


//con las nuevas caracteristicas

const dog ={
    nombre,
    edad,
    ladrar(){
        console.log("hola soy un perro guau guau")
    }
}

console.log(dog)
dog.ladrar()