let operation = prompt('What operation do you want? (add, sub, mult, div)');
let firstNum = prompt('Enter first number');
let SecondNum = prompt('Enter second number');

let res;
if (operation === 'add') {
    res = `${firstNum} + ${SecondNum} = ${Number(firstNum) + Number(SecondNum)}`;
} else if (operation === 'sub') {
    res = `${firstNum} - ${SecondNum} = ${firstNum - SecondNum}`;
} else if (operation === 'mult') {
    res = `${firstNum} * ${SecondNum} = ${firstNum * SecondNum}`;
} else if (operation === 'div') {
    res = `${firstNum} / ${SecondNum} = ${firstNum / SecondNum}`;
} else {
    res = 'An error occurred!!!'
}

alert(res);