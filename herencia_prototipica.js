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
    console.log("no importa, yo te la limpio")
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
    console.log("Guau Guau")
}


const Gigi= new Animal("Zorra","Hembra",2)

console.log(Gigi.vivo)
Gigi.muerto()
console.log(Gigi.vivo)
Gigi.sonido()

const Nube= new Perro("hembra",3,"mediano")

console.log(Nube.vivo)
Nube.muerto()
console.log(Nube.vivo)
Nube.sonido()