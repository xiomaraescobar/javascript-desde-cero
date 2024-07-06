//Exercise: transaction analysis

const transactions = [
    { id: 1, description: 'Grocery shopping', amount: -50},
    { id: 2, description: 'Salary Deposit', amount: 2000},
    { id: 3, description: 'Utility bill Payment', amount: -100},
    { id: 4, description: 'Online Purchase', amount: -30}
]

//1. calculate total Balance

const totalBalance = transactions.reduce((acc, transaction) => acc +  transaction.amount, 0)
console.log('Total Balance:', totalBalance)

// 2. find the largest transaction (Income or expense)

const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
    return Math.abs(transaction.amount) >  Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0])
console.log('largest Transaction: ', largestTransaction)

//3. filter purchase transactions

const purchaseTransactions = transactions.filter(transaction => transaction.amount < 0)
console.log(' purchase Transactions:', purchaseTransactions)

//4. find a transaction by description

const specificTransaction = transactions.find(transaction => transaction.description === 'Online Purchase')
console.log('Specific Transaction: ', specificTransaction)

 //5. find the index of transaction by amount

 const indexTransactionWithAmount = transactions.findIndex(transaction => transaction.amount === -30)
 console.log('Index Transaction With Amount -30: ', indexTransactionWithAmount)

 //update transaction description

 transactions.forEach(transaction => {
  if (transaction.amount < 0) {
    transaction.description = `Expense: ${transaction.description}`
  } else {
    transaction.description = `Income: ${transaction.description}`
  }
 })
 console.log('Updated Transactions:', transactions)

