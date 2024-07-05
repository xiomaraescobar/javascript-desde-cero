//methods that iterate over an array
//methods that DO NOT modify the original array (inmutability)

//map()

const numbers =[1,2,3,4,5]
const squaredNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squaredNumbers)

//forEach()

const colors = ['red', 'pink','blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

//Exercise: fahrenheit to celsius conversion

const temperaturesInfahrenheit = [32,68,95,104,212]

const temperaturesInCelsius = temperaturesInfahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32))

console.log('Temperatures In Fahrenheit:', temperaturesInfahrenheit)
console.log('Temperatures In Celsius', temperaturesInCelsius)

//Exercise: sum of Elements in an array

const newNumbers = [1,2,3,4,5]

let sum = 0

newNumbers.forEach(number => {
    sum += number
})

console.log('Array of numbers:', newNumbers)
console.log('sum of Numbers:', sum)