// Methods that DO NOT modify the original array (Immutability).

const Ilove1= ['te', 'amo'] // H O
const Ilove2 = ['mi', 'amor'] // L A

// Combine with concat() Â· way 1

const morseCodeMessage = Ilove1.concat(Ilove2)

console.log(Ilove1)
console.log(Ilove2)
console.log(morseCodeMessage)

// Combine with concat() Â· way 2

const morseCodeMessage2 = [].concat(Ilove1, Ilove2)

console.log(Ilove1)
console.log(Ilove2)
console.log(morseCodeMessage)

// Combine with Spread Operator

function combineMorseMessages (morseCode1, morseCode2) {
  console.log([...morseCode1, ...morseCode2])
}

combineMorseMessages(Ilove1, Ilove2)

const numbers = [1, 2, 3, 4]
const string = 'VIDA'

combineMorseMessages(numbers, string)

// join()

const morseCodeMessageString = morseCodeMessage.join('-')

console.log(Ilove1)
console.log(Ilove2)
console.log(morseCodeMessageString)