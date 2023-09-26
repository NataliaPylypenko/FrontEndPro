let number1 = prompt('Enter first number');
let number2 = prompt('Enter second number');

alert(`
${number1} + ${number2} = ${Number(number1) + Number(number2)}
${number1} - ${number2} = ${number1 - number2}
${number1} * ${number2} = ${number1 * number2}
${number1} / ${number2} = ${(number1 / number2).toFixed(3)}
`);