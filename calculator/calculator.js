function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(array) {
	return array.reduce((total, num) => total + num, 0)
}

function multiply(num) {
	let result = 1;
	for (i = 0; i < num.length; i++) {
		result *= num[i];
	}
	return result;
}

function power(num, power) {
	let result = num;
	for (i = 1; i < power; i++) {
		result *= num;
	}
	return result;
}

function factorial(num) {
	let result = 1;
	for (i = num; i > 1; i--) {
		result *= i;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}