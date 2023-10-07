// Вивести на сторінку в один рядок через кому числа від 10 до 20.
console.log(8.1);

let str_01 = '';
let i_01 = 10;

while (i_01 <= 20) {
    str_01 += i_01 + ', ';
    i_01++;
}

console.log(str_01);

// Вивести квадрати чисел від 10 до 20.
console.log('');
console.log(8.2);

let str_02 = '';
let i_02 = 10;

while (i_02 <= 20) {
    str_02 += i_02 ** 2 + ' ';
    i_02++;
}

console.log(str_02);

// Вивести таблицю множення на 7.
console.log('');
console.log(8.3);

let i_03 = 1;
let num_03 = 7;

while (i_03 <= 10) {
    console.log(` ${num_03} * ${i_03} = ${num_03 * i_03} `);
    i_03++;
}

// Знайти суму всіх цілих чисел від 1 до 15.
console.log('');
console.log(8.4);

let sum_04 = 0;
let i_04 = 1;

while (i_04 <= 15) {
    sum_04 += i_04;
    i_04++;
}

console.log(sum_04);

// Знайти добуток усіх цілих чисел від 15 до 35.
console.log('');
console.log(8.5);

let prod_05 = 1;
let i_05 = 15;

while (i_05 <= 35) {
    prod_05 *= i_05;
    i_05++;
}

console.log(prod_05);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
console.log('');
console.log(8.6);

let sum_06 = 0;
let i_06 = 1;

while (i_06 <= 500) {
    sum_06 += i_06;
    i_06++;
}

let arithmeticMean = sum_06 / --i_06;
console.log(arithmeticMean);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
console.log('');
console.log(8.7);

let sum_07 = 0;
let i_07 = 30;

while (i_07 <= 80) {
    if (i_07 % 2 === 0) {
        sum_07 += i_07;
    }
    i_07++;
}

console.log(sum_07);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
console.log('');
console.log(8.8);

let str_08 = '';
let i_08 = 100;

while (i_08 <= 200) {
    if (i_08 % 3 === 0) {
        str_08 += i_08 + ' ';
    }
    i_08++;
}

console.log(str_08);

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
//     Визначити кількість його парних дільників.
//     Знайти суму його парних дільників.
console.log('');
console.log(8.9);

let num_09 = 12;
let i_09 = 1;
let divisors = '';
let quantityOfEvenDivisors = 0;
let sumOfEvenDivisors = 0;

while (i_09 <= num_09) {
    if (num_09 % i_09 === 0) {
        divisors += i_09 + ' ';

        if (i_09 % 2 === 0) {
            quantityOfEvenDivisors ++;
            sumOfEvenDivisors += i_09;
        }
    }
    i_09++;
}

console.log('divisors:', divisors);
console.log('quantityOfEvenDivisors:', quantityOfEvenDivisors);
console.log('sumOfEvenDivisors:', sumOfEvenDivisors);

// Надрукувати повну таблицю множення від 1 до 10.
console.log('');
console.log('8.10');
console.log('multiplication table');

let i_10 = 1;
let k_10 = 1;

while (i_10 <= 10) {
    while (k_10 <= 10) {
        console.log(` ${i_10} * ${k_10} = ${i_10 * k_10} `);
        k_10++;
    }

    console.log('');
    i_10++;
    k_10 = 1;
}


