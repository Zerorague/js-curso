// objetos en js todo es un objeto

const objeto = {

} // un objeto es una coleccion de llaves valores

console.log(objeto)

//dentro de un objeto a las variables se le van a llamar atributos/ y a las funciones se les llama metodos
const Julio={
    nombre : "Julio",
    apellido:"San Martin",
    edad:29,
    altura:1.71, //los objetos pueden tener objetos dentro de si
    contacto:{
        email:"julioasmb@gmail.com",
        telefono:"+569-66109875"
    },
    saludar:function () {
        console.log("holaaa")
    },
    decirMiNombre: function () {
        return `hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Mi contacto es ${this.contacto.email}`

    } //this es como self aun q se ocupa de manera un poco diferente
}

console.log(Julio.saludar()) //"""se ingresa a los valores del objeto a partir de la nomenclatura del punto"""

console.log(Julio.decirMiNombre())

console.log(Object.keys(Julio)) //metodo del objeto object que nos permites ver las llaves de mi objeto

console.log(Object.values(Julio)) // lo mismo de arriba ↑ pero con los valores

console.log(Julio.hasOwnProperty("saludar")) //evalua si el objeto contiene cierta propiedad o metodo retornando true or false la traduccion sera algo como "es dueño de la propiedad?

function boton () {
    return document.write(parseFloat(document.getElementById("num1").value) + parseFloat(document.getElementById("num2").value))
}