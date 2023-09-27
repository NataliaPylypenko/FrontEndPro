let operation = prompt('What operation do you want? (add, sub, mult, div)');
let firstNum = prompt('Enter first number');
let secondNum = prompt('Enter second number');

firstNum = Number(firstNum);
secondNum = Number(secondNum);

let res;

if (!firstNum && firstNum !== 0 || !secondNum && secondNum !== 0) {
    res = 'Enter the numbers in the second and third fields!!!';
} else if (operation === 'add') {
    res = `${firstNum} + ${secondNum} = ${firstNum + secondNum}`;
} else if (operation === 'sub') {
    res = `${firstNum} - ${secondNum} = ${firstNum - secondNum}`;
} else if (operation === 'mult') {
    res = `${firstNum} * ${secondNum} = ${firstNum * secondNum}`;
} else if (operation === 'div') {
    if (secondNum !== 0) {
        res = `${firstNum} / ${secondNum} = ${firstNum / secondNum}`;
    } else {
        res = 'Cannot be divided by zero';
    }
} else {
    res = 'An error occurred!!! Select the correct operation!!!'
}

alert(res);