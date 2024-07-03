//asi se escriben los string primitivos (son inmutables)

const stringPrimitivo = 'soy un string primitivo';
console.log(typeof stringPrimitivo);

const stringPrimitivoTambien = String('soy un string primitivo tambien');
console.log(typeof stringPrimitivoTambien)

//string objetos ( son mutados es decir que se puede cambiar su valor original)
const stringObjeto = new String('soy un string objeto')
console.log(typeof stringObjeto);

// acceder a caracteres

const saludo = 'Hola.¿cómo estás?';

console.log(saludo[2]);
console.log(saludo.charAt(2));
console.log(saludo.indexOf('o'));
console.log(saludo.indexOf('cómo'));
console.log(saludo.indexOf('como'));
console.log(saludo.lastIndexOf('o'));
console.log(saludo.slice(3,5));
console.log(saludo.length);
console.log(saludo.toLocaleUpperCase());
console.log(saludo.toLocaleLowerCase());

const saludoDividido = saludo.split('');
console.log(saludoDividido);
console.log(saludoDividido[1]);

const saludoConEspacio = 'Hola Mundo';
const saludoSinEspacios = saludoConEspacio.trim();
console.log(saludoSinEspacios);

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', '❤️‍🔥'); //reemplazar
console.log(nuevoSaludo);
