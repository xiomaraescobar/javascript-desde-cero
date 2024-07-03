//1. tipo entero y decimal en js se escribe diferente pero por debajo es igual
const entero = 42;
const decimal = 3.14;
console.log(typeof entero, typeof decimal);

// 2. notacion cientifica
const cientifico = 5e3;

//3. infinitos y NaN
const infinito = Infinity;
const noEsUnNumero = NaN;

//operaciones aritmeticas

//1. suma, resta, multiplicacion  y division
const suma = 3 + 4;
const resta = 4 - 4;
const multiplicacion = 4 * 7;
const division = 16 / 2;

//2. módulo y exponenciacion
const modulo  = 15 % 8;
const exponenciacion = 2 ** 3;

//precision
const resultado = 0.1 + 0.2;
console.log(resultado);
console.log(resultado.toFixed(1)); // con esto le decimos cuantos numeros queremos despues del punto

//operaciones avanzadas

const raizCuadrada = Math.sqrt(16); //raiz cuadrada
const valorAbsoluto = Math.abs(-7); //valor absoluto de cualquier numero
const aleatorio = Math.random(); //saber un numero random( numro aleatorio)
console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(aleatorio);