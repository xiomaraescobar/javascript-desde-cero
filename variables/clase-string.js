//creacion de string
const primeraOpcion = 'comillas simples'; //cuando escribimos con comillas se le conoce como string literals y cuando obtenemos un resultado se le conoce como string valius
const segundaOpcion = "comillas dobles";
const terceraOpcion = `comillas invertidas`;

//concatenacion: opcion +
const direccion = 'calle 8 ';
const ciudad = 'medellin';
const direccionCompleta ='Mi direccion completa es ' + direccion + ciudad;
console.log(direccionCompleta);

// concatenacion con template literals
const nombre = 'Siomara';
const pais = 'Colombia';
const presentacion = `Hola, soy ${nombre} de ${pais} `;
console.log(presentacion);

// concatenacion con join()
const primeraParte = 'Me encanta';
const segundaParte = 'la  gente de ';
const terceraParte = 'mexico';
const pensamiento = [primeraParte, segundaParte,terceraParte];
console.log(pensamiento.join(''));

//concatenacion con concat()
const hobbie1 = 'correr';
const hobbie2 = 'leer';
const hobbie3 = 'estudiar';
const hoddies = 'Mis hobbies son: '.concat(hobbie1, ',', hobbie2,',', hobbie3,'.');
console.log(hoddies);

//caracteres de escape
//const whatDoIDo = 'I'm software Engineer'

// 1.Escape alternativo
const escapeAlternativo = "I'm software Engineer";

// 2. Barra invertida
const escapeBarraInvertida = 'I\'m software Engineer';

// 3. template literals
const escapeComillaInvertida = `I'm software Engineer`;

//como escribir string largos

/*las rosas son rojas,
 las violetas son azules,
 caracter inesperado,
 en la linea 86.
 */

 const poema = 'las rosas son rojas,\n'  +  // con esta linea invertida y la letra n le decimos al codigo que haga un salto de linea
                'las violetas son azules,\n' +
                'caracter inesperado,\n' +
                'en la linea 86.';
console.log(poema)

//otra forma de escribir los strings largos es la siguiente: barra invertida al final de cada linea
const poema2 = 'las rosas son rojas,\n\
las violetas son azules,\n\
caracter inesperado,\n\
en la linea 86.'

console.log(poema2)

//otra forma es con template literals
const poema3 = `las rosas son rojas,
las violetas son azules,
caracter inesperado,
en la linea 86.`

console.log(poema3)

