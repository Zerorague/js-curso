// un metodo estatico es aquel que se puede ejecutar sin necesidad de instanciar la clase

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
        this.raza=null
    }
    sonar(){
        console.log(`soy un perro de nombre ${this.nombre} y de tamaño ${this.tamano} y hago sonidos`)
    }
    ladrar(){
        console.log(`${this.nombre} dice Guau Guau`)
    }
    static queEres(){
        console.log("los perros son animales mamiferos que pertenecemos a la familia de los caninos.\nsomos considerados los mejores amigos del hombre.")
    }
    get getRaza(){
        return this.raza
    }
    set setRaza(valor){
        this.raza=valor
    }
}

Perro.queEres()
perro=new Perro("nube","hembra","pequeño")

perro.setRaza="kiltra"
console.log(perro.getRaza)


//los metodos setters y getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase