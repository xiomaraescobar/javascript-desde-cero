//asi se escriben los string primitivos (son inmutables)

const stringPrimitivo = 'soy un string primitivo';
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = string('soy un string primitivo tambien')
console.log(typeof stringPrimitivoTambien)

//string objetos ( son mutados es decir que se puede cambiar su valor original)
const stringObjeto = new string('soy un string objeto')
console.log(typeof stringObjeto)

// acceder a caracteres

const saludo = 'Hola.¿cómo estás?' 

console.log(saludo[2])
console.log(saludoAt(2))