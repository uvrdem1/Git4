const readlineSync = require('readline-sync')
const calculateDistance = (x1, y1, x2, y2) => {
	const distance = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
	return distance
}
console.log(
	calculateDistance(
		readlineSync.question('x1: '),
		readlineSync.question('y1: '),
		readlineSync.question('x2: '),
		readlineSync.question('y2: ')
	)
)
