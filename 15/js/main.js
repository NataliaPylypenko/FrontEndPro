'use strict';

const getUserResponseInteger = (message) => {
    let userResponse;
    while (true) {
        userResponse = parseInt(prompt(message));
        if(Number.isInteger(userResponse)){
            return userResponse;
        }
    }
};

const getUserResponseNotEmpty = (message) => {
    let userResponse;
    while (true) {
        userResponse = prompt(message);
        if(userResponse !== null && userResponse.trim() !== '') {
            return userResponse;
        }
    }
};

// 1
// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне
// лише числових елементів даного масиву.

const array = [1, '5', 'hello', 2, 3, true, [], 4, null, 5, undefined, {}];

// const getArithmeticMean = array => {
//     const arrayFilter = array.filter( item => typeof item === 'number');
//     return arrayFilter.length > 0
//         ? arrayFilter.reduce((acc, item) => acc + item , 0) / arrayFilter.length
//         : 0;
// };

const getArithmeticMean = array => array
    .filter( item => typeof item === 'number')
    .reduce((acc, item, i, arr) => acc + item / arr.length , 0);

console.log(getArithmeticMean(array));


// 2
// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії,
// вказаної в змінній znak.Обидва числа і знак виходять від користувача.

let x = getUserResponseInteger('Enter the first number');
let mathematicalOperation = getUserResponseNotEmpty('Enter mathematical operation');
let y = getUserResponseInteger('Enter the second number');

const operations = {
    '+': (x, y) => `${x} + ${y} = ${x + y}`,
    '-': (x, y) => `${x} - ${y} = ${x - y}`,
    '*': (x, y) => `${x} * ${y} = ${x * y}`,
    '/': (x, y) => (y !== 0 ? `${x} / ${y} = ${x / y}` : 'Cannot be divided by zero. Try again!'),
    '%': (x, y) => (y !== 0 ? `${x} % ${y} = ${x % y}` : 'Cannot be divided by zero. Try again!'),
    '^': (x, y) => `${x} ^ ${y} = ${x ** y}`
};

const doMath = (x, znak, y) => {
    const operation = operations[znak];
    return operation ? operation(x, y) : 'Invalid operator. Try again!';
};

console.log(doMath(x, mathematicalOperation, y));


// 3
// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву
// і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

// let mainArrayLengths = getUserResponseInteger('Enter the length of the main array');
// let internalArraysLengths = getUserResponseInteger('Enter the length of the internal arrays');
// const value = getUserResponseNotEmpty('Enter the value with which the array will be filled');
//
// const creatingAnArray = (mainArrayLengths, internalArraysLengths, value) => [...Array(mainArrayLengths)]
//         .map( () => [...Array(internalArraysLengths)].map( () => value) );
//
// console.log(creatingAnArray(mainArrayLengths, internalArraysLengths, value));


// 4
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи
// для видалення задає користувач.

// let string = getUserResponseNotEmpty('Enter string');
// let charactersToDelete = getUserResponseNotEmpty('Enter characters to delete separated by spaces').split(' ');
//
// const removeCharacters = (string, charactersToDelete) => [...string]
//     .filter(item => charactersToDelete.indexOf(item) === -1).join('');
//
// console.log(removeCharacters(string, charactersToDelete));