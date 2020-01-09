/**
Requirements

Write a function that accepts an integer and returns a “validation” number. This
validation number is calculated by adding all the digits in the input.

If the result of this sum has more than a single digit, another iteration is required, repeat
the process until a single digit number is calculated.

**/

var logger = [];

function clear() {
    logger = [];
}

function calculateValidationNumber(input) {
    let answer = input.toString().split('').map(Number).reduce(function(a, b) {
        logger.push({
            formula: `${a} + ${b}`,
            total: a + b
        });
        return a + b
    })

    if (answer.toString().length > 1) {
        answer = calculateValidationNumber(answer);
    }

    return logger
}