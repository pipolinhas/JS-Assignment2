// First Function: No return, just accepting text input and printing a message
function welcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

// Second Function: Converting Celsius to Fahrenheit
function convertTemperature(celsius) {
    return (celsius * 9/5) + 32;
}

// Third Function: Calculating the factorial of a number
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// Fourth Function: Advanced function of your choice (Example: Calculating the Greates Common Divisor of two numbers)
function advancedFunction(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Exporting the functions to be used in the entry point file
module.exports = { welcomeMessage, convertTemperature, factorial, advancedFunction };
