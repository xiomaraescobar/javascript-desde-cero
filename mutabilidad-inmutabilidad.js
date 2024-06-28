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

            //indice 0   indice 1 
let frutas = ['manzana', 'pera'];
frutas[0] = 'sandia';// esta es la forma de cambiar el indice 0
console.log(frutas)

function cambiarNombre (objeto) {
    objeto.nombre = 'nuevo nombre'
}
let persona = {nombre: 'antonio'}
cambiarNombre(persona);
console.log(persona);

