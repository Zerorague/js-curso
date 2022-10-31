/*
clase - modelo a seguir
objeto- es una instancia de la clase
-atributos- es una caracteristica o propiedad del objeto
-metodos- son las acciones que un bojeto puede realizar
*/

const animal ={
    nombre:"snoopy",
    sonar(){console.log("grrrrr")},
    caminar(){console.log("yo camino")}
}


animal.caminar() //para no repetir codigo se usan las clases

//funcion constructora para generar objetos
function Animal (nombre,genero) {
    this.nombre=nombre
    this.genero=genero

    this.sonar=function(){
        console.log(`soy un ${this.nombre}`)
    }
    
}
const snoopy= new Animal("Snoopy","Macho"),
lola=new Animal("Lola","Hembra")
lola.sonar()
console.log(snoopy)



// version 2 funcion constructora donde asiignamos los metodos al prototipo, no a la funcion como tal

function Animales(nombre,genero){
    this.nombre=nombre
    this.genero=genero //solo recibe los metodos
}

Animales.prototype.sonar=function(){
    console.log("hola soy un saludo desde el prototipo")
} //los metodos deben ser asignados a prototipo para mejorar rendimiento

conejo= new Animales("perro","machio")
conejo.sonar()