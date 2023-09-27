let number1 = prompt('Enter first number');
let number2 = prompt('Enter second number');

// ok and ok
// w and 2
// 8 and w
// 8 and 0
// 8 and 2
// 0 and 2

number1 = Number(number1);
number2 = Number(number2);

if (!number1 && number1 !== 0 || !number2 && number2 !== 0) {
    alert('You must enter numbers in both fields');
} else if (number2 === 0) {
    alert('The second number cannot be zero');
} else {
    alert(`
        ${number1} + ${number2} = ${number1 +number2}
        ${number1} - ${number2} = ${number1 - number2}
        ${number1} * ${number2} = ${number1 * number2}
        ${number1} / ${number2} = ${(number1 / number2).toFixed(2)}
    `);
}
