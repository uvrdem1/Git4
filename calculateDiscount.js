const readlineSync = require('readline-sync')
const calculateDiscount = (price, discountPercentage) => {
	const a = (price * discountPercentage) / 100
	const b = price - a
	return b
}
console.log(
	calculateDiscount(
		readlineSync.question('price: '),
		readlineSync.question('percentage: ')
	)
)
