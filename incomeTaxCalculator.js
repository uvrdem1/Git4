const readlineSync = require('readline-sync')
const incomeTaxCalculator = income => {
	const a = 0.15
	return income * a
}
console.log(incomeTaxCalculator(readlineSync.question('income:')))
