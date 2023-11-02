const readlineSync = require('readline-sync')
const calculateEmployeeBonus = (salary, performanceRating) => {
	if (performanceRating >= 8) {
		salary = salary * 0.2
	} else {
		salary = salary * 0.1
	}

	return salary
}
console.log(
	calculateEmployeeBonus(
		readlineSync.question('salary: '),
		readlineSync.question('rating: ')
	)
)
