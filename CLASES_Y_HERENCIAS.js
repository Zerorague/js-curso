class Animal {
    constructor(nombre,genero) {
        this.nombre=nombre
        this.genero=genero

        
    }
    sonar(){
        console.log("soy un animal y hago sonidos")
    }
}

class Perro extends Animal {
    constructor(nombre,genero,tamano){
        super(nombre,genero)
        this.tamano=tamano
    }
    sonar(){
        console.log(`soy un perro de nombre ${this.nombre} y de tamaño ${this.tamano} y hago sonidos`)
    }
    ladrar(){
        console.log(`${this.nombre} dice Guau Guau`)
    }
}
const Gato= new Animal("Gatuno","macho")
const Nube=new Perro("Nube","hembra","mediano")

Gato.sonar()
Nube.sonar()
Nube.ladrar()
