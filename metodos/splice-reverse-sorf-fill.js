//methods that modify the original array (mutability)

//splice

const vegetables = ['carrot','brocoli','spinach','tomato']
const removeVegetables = vegetables.splice(2,1, 'cucumber','onion')

console.log(vegetables)
console.log(removeVegetables)

//reverse()

const numbers = [1, 2, 3, 4, 5]
const reversedNumbers = numbers.reverse()

console.log(numbers)
console.log(reversedNumbers)

//sort() with number

const unsortedNumbers1 = [4,18,1,62,34]
const unicodeSortedNumbers = unsortedNumbers1.sort()

console.log(unsortedNumbers1)
console.log(unicodeSortedNumbers)

const unsortedNumbers2 =[4,18,1,62,34]
const sortedNumbers = unsortedNumbers2.sort((a,b) => a - b)

console.log(unsortedNumbers2 )
console.log(sortedNumbers )
// 4 - 18 = -14
// 18 - 1 = 17


//sort() with string

const cities = ['New york','Paris','Tokyo','London']
const sortedCities = cities.sort()

console.log(cities)
console.log(sortedCities)

// fill

const ages = [21,35,45,50]
console.log(ages.fill(0,2,4)) // esto quiere decir llena por favor desde la posicion 0 hasta la posicion 4 con ceros
console.log(ages.fill(15, 1)) //llena por favor con el nuemero 15 la posicion 1 en adelante
console.log(ages.fill(15)) // llena por favor todo con el nuemero 15


