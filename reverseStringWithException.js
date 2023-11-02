const readlineSync = require('readline-sync')
const reverseWord = (str, exc) => {
	let result = ''
	let i = str.length
	while (i > 0) {
		result = result + str[i - 1]
		i = i - 1
	}
	return result
}

const reverseStringWithException = (str, exc) => {
	return exc + ' ' + reverseWord(str.substring(0, str.indexOf(' ')))
}

console.log(
	reverseStringWithException(
		readlineSync.question('str: '),
		readlineSync.question('exception: ')
	)
)
