const palindromes = function (str) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890"
	const cleanedStr = str
		.toLowerCase()
		.split('')
		.filter(item => alphabet.includes(item))
		.join('')

	const reversedStr = cleanedStr.split('').reverse().join('');
	return cleanedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
