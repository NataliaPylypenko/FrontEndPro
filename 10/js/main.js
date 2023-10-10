// Створити масив, довжину та елементи якого задає користувач.

let arrayLength;
let array = [];

while (true) {
    arrayLength = parseInt(prompt('Please, enter length of array!'));
    if(Number.isInteger(arrayLength)){
        break;
    }
}

while (array.length < arrayLength) {
    let elem = parseInt(prompt('Please, enter the element of array! Only numeric value!'));

    if(Number.isInteger(elem)){
        array.push(elem);
    }
}

console.log('1', array);

// Відсортувати масив за зростанням.

arrayToSort = [...array].sort((a, b) => a - b);
console.log('2', arrayToSort);

// Видалити елементи з масиву з 2 по 4 (включно!).

arrayToSplice = [...arrayToSort];
arrayToSplice.length >= 4 ? arrayToSplice.splice(1, 3) : arrayToSplice.splice(1);
console.log('3', arrayToSplice);

