//Exercise: card game implementation

const deck = [1,2,3,4,5,6,7,8,9,10]

// fisher-yates algorithm // algoritmo para hacer barajas de cartas
function shuffleDeck () {
    for (let i = deck.length -1; i > 0; i--) {  // [0, i] -> i + 1  esto significa que el rango seria incluyendo el 1   // [0,i] -> i en caso de que no quiera incluir a i 
      const j = Math.floor(Math.random() * (i +1));
      [deck[i], deck[j]] =[deck[j], deck[i]]
    }
}
function dealCards (numCard) {
    const dealCards = deck.splice(0, numCard) //necesito que me saques una porcion de este numero de cartas
    return dealCards
}
shuffleDeck()

const player1Hand = dealCards(3)
const player2Hand = dealCards(3)
const player3Hand = dealCards(3)

console.log('Player 1 Hand: ', player1Hand)
console.log('Player 2 Hand: ', player2Hand)
console.log('Player 3 Hand: ', player3Hand)