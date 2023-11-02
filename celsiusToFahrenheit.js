const readlineSync = require('readline-sync')
const celsiusToFahrenheit = celsius => {
	return (celsius * 9) / 5 + 32
}
console.log(celsiusToFahrenheit(readlineSync.question('celsius:')))
