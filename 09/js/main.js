// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
console.log(9.1);

let str01 = '';
for (let i = 20; i <= 30; i += 0.5) {
    str01 += i + ' ';
}
console.log(str01);

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
console.log('');
console.log(9.2);

let dollarPrice = 27;
for (let i = 10; i <= 100; i +=10) {
    console.log(`${i} USD is ${dollarPrice * i} UAH`);
}

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
console.log('');
console.log(9.3);

let str03 = '';
let N = 666;
for (let i = 1; i <= 100; i++) {
    if (i ** 2 <= N) {
        str03 += i + ' ';
    }
}
console.log(str03);

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
console.log('');
console.log(9.4);

let num04 = 17;
let flag04 = false;
for (let i = 2; i < num04; i++) {
    if (num04 % i === 0) {
        flag04 = true;
        break;
    }
}
if (!flag04) {
    console.log(`the number ${num04} is prime`);
} else {
    console.log(`the number ${num04} has more than two divisors`);
}

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
console.log('');
console.log(9.5);

let num05 = 80;
let flag05 = false;
for (let i = 1; 3 ** i <= num05; i++) {
    if (3 ** i === num05) {
        flag05 = true;
        console.log(`Yes, this number we can be obtained by raising the number 3 to the ${i}th power`);
        break;
    }
}
if (!flag05) {
    console.log(`No, this number we cann't be obtained by raising the number 3 to any power`);
}