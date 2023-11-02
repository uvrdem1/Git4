const readlineSync = require('readline-sync')
const calculateTime = (distance, speed) => {
	time_in_hours = distance / speed
	hours = Math.round(time_in_hours)
	minutes = Math.round((time_in_hours * 60) % 60)
	return hours + 'ч' + ' ' + minutes + 'м'
}
console.log(
	calculateTime(
		readlineSync.question('distance: '),
		readlineSync.question('speed: ')
	)
)
