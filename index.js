// Importing the utility functions from the utilities file
const { welcomeMessage, convertTemperature, factorial, advancedFunction } = require('./utilities');

// Invoking the functions to demonstrate their usage
welcomeMessage('Felipe', 'Vasconcelos');
console.log(`Converted Temperature: ${convertTemperature(25)} °F`);
console.log(`Factorial: ${factorial(5)}`);
console.log(`Advanced Function Result: ${advancedFunction(5, 10)}`);
