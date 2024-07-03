//paso por valor
let x = 1;
let y = 'Hola';
let z = null;

let a = x;
let b = y;
let c = z;

console.log(x, y, z, a, b, c);

a =  12;
b = 'platzi';
c = 'undefined';

//paso por referencia
//lo que se hace es  llegar a la posicion en memoria y despues se hace el cambio o modificacion o eliminacion

let frutas = ['manzana'];
frutas.push('pera');// agrega otra fruta
console.log(frutas);

let panes = ['🥐'];
let copiaDePanes = panes;
panes.push('🍞'); //agrega otro pan
console.log(panes, copiaDePanes);