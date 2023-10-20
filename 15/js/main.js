'use strict';

// 1
// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне
// лише числових елементів даного масиву.

const array = [1, '5', 'hello', 2, 3, true, [], 4, null, 5, undefined, {}];

const getArithmeticMean = array => {
    const arrayFilter = array.filter( item => typeof item === 'number');
    return arrayFilter.length > 0
        ? arrayFilter.reduce((acc, item) => acc + item , 0) / arrayFilter.length
        : 0;
};

// const getArithmeticMean = array => array
//     .filter( item => typeof item === 'number')
//     .reduce((acc, item, i, arr) => acc + item / arr.length , 0);

console.log(getArithmeticMean(array));


// 2
// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії,
// вказаної в змінній znak.Обидва числа і знак виходять від користувача.

let x = +prompt('Enter first number');
let mathematicalOperation = prompt('Enter mathematical operation');
let y = +prompt('Enter second number');

const doMath = (x, znak, y) => {
   switch (znak) {
      case '+':
          return `${x} + ${y} = ${x + y}`;
      case '-':
          return `${x} - ${y} = ${x - y}`;
      case '*':
          return `${x} * ${y} = ${x * y}`;
      case '/':
          return y !== 0 ? `${x} / ${y} = ${x / y}` : 'Cannot be divided by zero. Try again!';
      case '%':
          return y !== 0 ? `${x} % ${y} = ${x % y}` : 'Cannot be divided by zero. Try again!';
      case '^':
          return `${x} ^ ${y} = ${x ** y}`;
      default:
          return 'Something went wrong. Try again!';
   }
};

console.log(doMath(x, mathematicalOperation, y));

// 3
// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву
// і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

const mainArrayLengths = +prompt('Enter the length of the main array');
const internalArraysLengths = +prompt('Enter the length of the internal arrays');
const value = prompt('Enter the value with which the array will be filled');

const creatingAnArray = (mainArrayLengths, internalArraysLengths, value) => [...Array(mainArrayLengths)]
        .map( () => [...Array(internalArraysLengths)].map( () => value) );

console.log(creatingAnArray(mainArrayLengths, internalArraysLengths, value));

// 4
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи
// для видалення задає користувач.

let string = prompt('Enter string');
let charactersToDelete = prompt('Enter characters to delete separated by spaces').split(' ');

const removeCharacters = (string, charactersToDelete) => [...string]
    .filter(item => charactersToDelete.indexOf(item) === -1).join('');

console.log(removeCharacters(string, charactersToDelete));