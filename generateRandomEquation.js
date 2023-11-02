const generateRandomEquation = () => {
	let a = Math.round(Math.random() * 11)
	let b = Math.round(Math.random() * 11)
	let c = Math.round(Math.random() * 11)
	if (Math.random() >= 0.5) {
		a = -a
	}
	if (Math.random() >= 0.5) {
		b = -b
	}
	if (Math.random() >= 0.5) {
		c = -c
	}
	return `${a}x + ${b} = ${c}`
}
console.log(generateRandomEquation())
