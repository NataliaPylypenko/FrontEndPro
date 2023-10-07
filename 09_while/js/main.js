// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
console.log(9.1);

let str_01 = '';
let i_01 = 20;

while (i_01 <= 30) {
    str_01 += i_01 + ' ';
    i_01 += 0.5;
}

console.log(str_01);

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
console.log('');
console.log(9.2);

let dollarPrice  = 27;
let i_02 = 10;

while (i_02 <= 100) {
    console.log(`${i_02} USD is ${dollarPrice * i_02} UAH`);
    i_02 += 10;
}

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
console.log('');
console.log(9.3);

let N = 123;
let str_03 = '';
let i_03 = 1;

while (i_03 <= 100) {
    if (i_03 ** 2 <= N) {
        str_03 += i_03 + ' ';
    }
    i_03++;
}

console.log(str_03);

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
console.log('');
console.log(9.4);

let num_04 = 23;
let i_04 = 2;
let flag_04 = false;

while (i_04 < num_04) {
    if (num_04 / i_04 === 0) {
        flag_04 = true;
        break;
    }
    i_04++;
}

if (flag_04) {
    console.log(`the number ${num_04} has more than two divisors`);
} else {
    console.log(`the number ${num_04} is prime`);
}

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
console.log('');
console.log(9.5);

let num_05 = 81;
let N_05 = 3;
let i_05 = 1;
let flag_05 = false;

while (N_05 ** i_05 <= num_05) {
    if (N_05 ** i_05 === num_05) {
        flag_05 = true;
    }
    i_05++;
}

if (flag_05) {
    console.log(`Yes, this number we can be obtained by raising the number 3 to the ${--i_05}th power`);
} else {
    console.log(`No, this number we cann't be obtained by raising the number 3 to any power`);
}

