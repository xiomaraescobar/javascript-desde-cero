// Explicit type casting

const string = '42';
const integer = parseInt(string);
console.log(integer);
console.log(typeof integer);// typeof nos  dice de que tipo es

const stringDecimal ='3.14';
const float = parseFloat(stringDecimal);
console.log(float);
console.log(typeof float);

const binary = '1010';
const decimal = parseInt(binary, 2);
console.log(decimal);
console.log(typeof decimal);

//implicit type casting
const sum = '5' + 3; // aqui lo que hace javascript es concatenar nos daria como resultado 53
console.log(sum);

const sumWithBoolean = '3' + true;
console.log(sumWithBoolean);

const sumWithNumber = 2 + true; //aqui js esta sumando
console.log(sumWithNumber);

const stringValue = '10';
const numberValue = 10;
const booleanValue = true;
console.log(stringValue + stringValue);//string con string concatena (mientras tenga string concatena fijate de aqui para abajo) 
console.log(stringValue + numberValue);//string con number concatena
console.log(stringValue + booleanValue);//string con boolean concatena
console.log(numberValue + stringValue);//number con string concatena
console.log(numberValue + numberValue);//number con number sumar ( cuando no hay string lo que hace es sumar)
console.log(numberValue + booleanValue);//number con boolean sumar
console.log(booleanValue + stringValue);//boolean con string concatena
console.log(booleanValue + numberValue);//boolean con number suma
console.log(booleanValue + booleanValue);//boolean con boolean suma
