// Methods that DO NOT modify the original array (Immutability).

const ages = [21, 25, 30, 19, 22]

// every()

const allAreAdults = ages.every(age => age > 18) // aqui se pregunta si en todos los elementos de un array cumplen con la condicion que se esta evaluando.
                                                 //se esta preguntando si todas las edades es mayor a 18
console.log(ages)
console.log(allAreAdults)

// some()
const atLeastOneIsOver30 = ages.some(age => age >= 30)// si al menos uno cumple con la condicion

console.log(ages)
console.log(atLeastOneIsOver30)