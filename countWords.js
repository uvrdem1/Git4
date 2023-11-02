const readlineSync = require('readline-sync')
const wordCount = sent => {
	return sent.split(' ').length
}
console.log(countWords(readlineSync.question('sentence:')))
