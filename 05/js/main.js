let firstNum = prompt('Enter first number');
let secondNum = prompt('Enter second number');
let thirdNum = prompt('Enter third number');

firstNum = Number(firstNum);
secondNum = Number(secondNum);
thirdNum = Number(thirdNum);

let answer;

if ((firstNum || firstNum === 0) && (secondNum || secondNum === 0) && (thirdNum || thirdNum === 0)) {
    let arithmeticMean = (firstNum + secondNum + thirdNum) / 3;
    answer = `${arithmeticMean} is the arithmetic mean of ${firstNum}, ${secondNum} and ${thirdNum}`;
} else {
    answer = 'You must enter numbers in all fields';
}

alert(answer);
