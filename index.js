const readlineSync = require('readline-sync')

userName = readlineSync.question('Введите ваше имя: ')

console.log(
	`Привет, ${userName}! Добро пожаловать в мир Node.js и readline-sync.`
)
