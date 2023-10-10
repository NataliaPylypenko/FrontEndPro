// Створити масив, довжину та елементи якого задає користувач.

let arrayLength;
let array = [];

for (let i = 0; i < 1; i++) {
    arrayLength = parseInt(prompt('Please, enter length of array!'));

    if (isNaN( +arrayLength )) {
        alert('Please, enter a number!');
        i--;
    }
}

for (let i = 0; i < arrayLength; i ++) {
    let elem = parseInt(prompt('Please, enter the element of array! Only numeric value!'));

    if (isNaN( +elem )) {
        alert('Please, enter a number!');
        i--;
    } else {
        array.push(elem);
    }
}

console.log('1', array);

// Відсортувати масив за зростанням.
array.sort((a, b) => a - b);
console.log('2', array);

// Видалити елементи з масиву з 2 по 4 (включно!).
array.length >= 4 ? array.splice(1, 3) : array.splice(1);
console.log('3', array);

