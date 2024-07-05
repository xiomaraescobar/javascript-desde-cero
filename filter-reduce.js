// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0) //si el modulo de este numero es igual a 0 es un numero par

console.log(numbers)
console.log(evenNumbers)

// reduce() Â· case 1

const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0) //funciona como si fuera una variable iniciando en cero

console.log(numbersReduce)
console.log(sum)

// reduce() Â· case 2

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

const wordFrecuency = words.reduce((accumulator, currentValue) => { //aqui buscamos cuantas vecces se repite una palbra en un array
  if (accumulator[currentValue]) { //si alguna palbra se repite se guarda en acumulador +1
    accumulator[currentValue]++
  } else {
    accumulator[currentValue] = 1
  }
  return accumulator
}, {})

console.log(wordFrecuency)

// Exercise: Passing Grade Average //calificacion promedio 

const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94]

const passingGrades = grades.filter(grade => grade >= 70) //aqui se evaluan las notaas si son mayores a 70

const averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length //aqui se calcula el promedio

console.log('Original Grades: ', grades) // se imprimen las notas originales
console.log('Passing Grades: ', passingGrades) // notas aprobatorias
console.log('Average Passing Grade: ', averagePassingGrade) // promedio notas