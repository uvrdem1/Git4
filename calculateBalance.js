const readlineSync = require('readline-sync')
const calculateBalance = (incomes, expenses) => {
	const balance = incomes - expenses
	return balance
}
console.log(
	calculateBalance(
		readlineSync.question('incomes:'),
		readlineSync.question('expenses: ')
	)
)
