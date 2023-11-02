const readlineSync = require('readline-sync')
const calculateAverageGrade = grades => {
	const gradesAr = grades.split(' ')
	const gradesSum = 0

	for (let i = 0; i < gradesAr.length; i++) {
		gradesSum += parseInt(gradesAr[i])
	}

	return gradesSum / gradesAr.length
}
console.log(calculateAverageGrade(readlineSync.question('grades: ')))
