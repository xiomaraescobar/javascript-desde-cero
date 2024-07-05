// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// find()

const multipleOf5 = [5, 10, 15, 20]
const firstNumberGreaterThan10 = multipleOf5.find(number => number > 10)

console.log(multipleOf5)
console.log(firstNumberGreaterThan10)

// findIndex()

const randomNumber = [6, 14, 27, 56, 40]
const indexNumber = randomNumber.findIndex(number => number > 50)

console.log(randomNumber)
console.log(indexNumber)

// Exercise: Raffle Winner Verification Program

const winningParticipants = [ //lista de participantes creamos un array en un objetos para almacenar los datos de cada persona
  { id: 1, name: 'Camila', ticketNumber: 001 },
  { id: 8, name: 'Manuela', ticketNumber: 008 },
  { id: 15, name: 'David', ticketNumber: 015 },
  { id: 47, name: 'Marcela', ticketNumber: 047 }
]

function findWinnerByName (name) { //funcion para verificar si exite el nombre del participantes
  const winner = winningParticipants.find(participants => participants.name === name)//aqui decimos si el nombre que pasamos es igual al nombre entonces hay un ganador
  return winner || 'No winner found with that name.' //sino nos envia un mensaje de no es el ganador
}

function findIndexWinnerByTicket (ticketNumber) { //verificacion
  const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticketNumber)
  return index !== -1 ? index : 'No winner found with that ticket number.' //aqui validamos que el index sea diferente de -1 y que nos envie un mensaje de tiket no encontrado
}

function displayWinnerInformation (winner) { //funcion para mostrar el ganador 
  if (winner !== undefined && winner != null && winner !== 'No winner found with that name.') { //aqui se validan que el tiket sea diferente y que efectivamente hay un ganador
    console.log('Winner information: ', winner)
  } else { //sino envia mensaje de que no es ganador
    console.log('No winner found.')
  }
}

const winnerByName = findWinnerByName('Manuela')
const indexWinnerByTicket = findIndexWinnerByTicket(008)

displayWinnerInformation(winnerByName)
console.log('Index of Winner by Ticket Number: ', indexWinnerByTicket)