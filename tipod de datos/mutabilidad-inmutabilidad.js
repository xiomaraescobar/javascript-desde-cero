//tipo de dato primitivo - inmutable
let numero = 23;
numero = numero + 10;
console.log(numero);

let esVerdadero = true;
esVerdadero = false;
console.log(esVerdadero);

//tipo de dato complejo - mutable
let usuario = { nombre:'pepito',edad: 15};
usuario.edad = 20;
console.log(usuario);

 //arrays    //indice 0   indice 1 
let frutas = ['manzana', 'pera'];
frutas[0] = 'sandia';// esta es la forma de cambiar el indice 0
console.log(frutas)

//funciones cambiar o modificar un nombre de un objeto
function cambiarNombre (objeto) { //la funcion seria cambiar nombre y dentro se le pasa como parametro un objeto es decir esta funcion tiene como funcionlidad cambiar el nombre
    objeto.nombre = 'nuevo nombre'
}
let persona = {nombre: 'antonio'}
cambiarNombre(persona); //esta funcion nos lo cambia por un nuevo nombre
console.log(persona);

