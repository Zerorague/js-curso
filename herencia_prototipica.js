function Animal (especie,genero,patas) {
    this.especie=especie
    this.genero=genero
    this.patas=patas
    this.vivo=true

}

Animal.prototype.muerto=function(){
    this.vivo=false
}
Animal.prototype.sonido= function() {
    console.log("soy un animal")
}

//Herencia

function Perro (genero,patas,tamano){
    this.super = Animal
    this.super(genero,patas)
    this.tamano=tamano

}

Perro.prototype =new Animal() //perro esta heredando de animal

Perro.prototype.constructor = Perro  //al heredar ↑ del prototipo animal tambien puedo usar los metodos


//Sobre escritura de metodos

Perro.prototype.sonido = function(){
    console.log("mi sonido es ladrar")
}

Perro.prototype.ladrar= function () {
    console.log("guau guau")
}


const mantecado= new Animal("gato","macho",2)

console.log(mantecado.vivo)
mantecado.muerto()
console.log(mantecado.vivo)
mantecado.sonido()

const Nube= new Perro("hembra",3,"mediano")

console.log(Nube.vivo)
Nube.muerto()
console.log(Nube.vivo)
Nube.sonido()
Nube.ladrar()


console.log(Perro)