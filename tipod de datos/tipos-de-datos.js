//tipos de datos null, undefined, symbol, bigint
//null
const snoopy = null;
console.log(snoopy);
console.log(typeof snoopy);

//undefined
let name;
console.log(name);

//symbol (sirve para escribir valores valores unicos que no queremos que cambien)
const uniqueId = Symbol('id')
const symbol1 = Symbol(1);
const symbol2 = Symbol(1);
console.log(symbol1 === symbol2);

const ID = Symbol('id');
let user = {};
user [ID] = '1234';
console.log(user);

//BigInt ( se usa para los nuemros que son muy grandes)
const bigNumber = 15789331547992546932n;
console.log(bigNumber);
const numberOfParticlesInTheUniverse = 1000000000000000n;
console.log(numberOfParticlesInTheUniverse);
