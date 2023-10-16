const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log(arr);
console.log('');


// Знайти суму та кількість позитивних елементів.

const positiveElements = arr.filter( elem => elem > 0);
const sumPositiveElements = positiveElements.reduce((acc, elem) => acc + elem, 0);
const countPositiveElements = positiveElements.length;

console.log('sumPositiveElements', sumPositiveElements);
console.log('countPositiveElements', countPositiveElements);


// Знайти мінімальний елемент масиву та його порядковий номер.

const minElem = Math.min(...arr);
const indexMinElem = arr.indexOf(minElem);

console.log('minElem', minElem);
console.log('indexMinElem', indexMinElem);

// Знайти максимальний елемент масиву та його порядковий номер.
const maxElem = arr.reduce( (acc, elem) => acc < elem ? elem : acc);
const indexMaxElem = arr.findIndex(elem => elem === maxElem);

console.log('maxElem', maxElem);
console.log('indexMaxElem', indexMaxElem);


// Визначити кількість негативних елементів.
const countNegativeElements = arr.reduce((acc, elem) => {
    return elem < 0 ? acc + 1 : acc;
}, 0);
console.log('countNegativeElements', countNegativeElements);

// Знайти кількість непарних позитивних елементів.
const countOddPositiveElements = arr.reduce((acc, elem) => {
    return elem > 0 && elem % 2 !== 0 ? acc + 1 : acc;
}, 0);
console.log('countOddPositiveElements', countOddPositiveElements);

// Знайти кількість парних позитивних елементів.
const countEvenPositiveElements = arr.reduce((acc, elem) => {
    return elem > 0 && elem % 2 === 0 ? acc + 1 : acc;
}, 0);
console.log('countEvenPositiveElements', countEvenPositiveElements);

// Знайти суму парних позитивних елементів.
const sumEvenPositiveElements = arr.reduce((acc, elem) => {
    return elem > 0 && elem % 2 === 0 ? acc + elem : acc;
}, 0);
console.log('sumEvenPositiveElements', sumEvenPositiveElements);

// Знайти суму непарних позитивних елементів.
const sumOddPositiveElements = arr.reduce((acc, elem) => {
    return elem > 0 && elem % 2 !== 0 ? acc + elem : acc;
}, 0);
console.log('sumOddPositiveElements', sumOddPositiveElements);

// Знайти добуток позитивних елементів.
const productPositiveElements = arr.reduce((acc, elem) => {
    return elem > 0 ? acc * elem : acc;
}, 1);
console.log('productPositiveElements', productPositiveElements);

// Знайти найбільший серед елементів масиву, остальні обнулити.
const newArray = arr.map( elem => {
    return elem === maxElem ? elem : 0;
});

console.log('newArray', newArray);