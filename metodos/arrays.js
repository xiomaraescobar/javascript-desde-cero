//how to create an array ?

//1. new Array() or Array()

const fruits = Array('apple', 'banana', 'orange')//array con strings
console.log(fruits)

const justOneNumber = Array(12) //genera 12 posiciones vacias
console.log(justOneNumber)

const number = Array(1, 2, 3, 4, 5) //array con todos los numeros
console.log(number)

// 2. Array literal syntax // sintaxis literal

const oneNumber = [4] //un array con 1 sola posicion funciona para iniciar un programa o para llenarlo despues
console.log(oneNumber)

const emptArray =[] // esto es un array vacio
console.log(emptArray)

const sports = ['soccer', 'tennis', 'rugby'] //array con string
console.log(sports)

const recipeIngredients = [ // array mixtos
    'flour',
    true,
    2,
    {
        ingredient: 'Milk', quantity: '1 cup'
    },
    false
]
console.log(recipeIngredients)

//accesing array elements // como acceder a ciertos arrays

const firstFruit = fruits[0]//aqui estamos accediendo al indice 0 que corresponde a apple
console.log(firstFruit)

// length property // acceder al tamaño de un array ( cantidad de elementos que contiene el array)
const numberOfFruits = fruits.length
console.log(numberOfFruits)

//mutability

fruits.push('watermelon')//me agrega una nueva fruta 
console.log(fruits)

//Inmutability

const newFruits = fruits.concat('grape', 'kiwi') //crea un nuevo array con las frutas agregadas
console.log(fruits)
console.log(newFruits)

//checking arrays with arrays. is array // como comprobar que un array es un array

const isArray = Array.isArray(fruits)
console.log(isArray)

//practical exercise: sum all elements of an array

const numbersArray = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i]
}

console.log(sum)