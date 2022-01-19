const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	// console.log(mathSymbol)
	// console.log(num1)
	// console.log(num2)

	switch (mathSymbol) {
		case '+':
			console.log(num1, mathSymbol, num2, "=", num1 + num2)
			break

		case '-':
			console.log(num1, mathSymbol, num2, "=", num1 - num2)
			break

		case '*':
			console.log(num1, mathSymbol, num2, "=", num1 * num2)
			break

		case '/':
			console.log(num1, mathSymbol, num2, "=", num1 / num2)
			break

		case 'sqrt':
			console.log(`sqrt(${num1}) =`, Math.sqrt(num1))
			break

		case 'square':
			console.log(`${num1}^2 =`, num1 * num1)
			break

		case 'cube':
			console.log(`${num1}^3 =`, num1 * num1 * num1)
			break

		case 'x^y':
			console.log(`${num1}^${num2} =`, Math.pow(num1,num2))
			break

		default:
			console.log(`The mathSymbol "${mathSymbol}" is not supported`)
	}

	// This line closes the connection to the command line interface.
	reader.close()

});
