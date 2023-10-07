// Вивести на сторінку в один рядок через кому числа від 10 до 20.
console.log(8.1);
let str01 = '';
for (let i = 10; i <= 20; i++) {
    str01 += i + ', ';
}
console.log(str01);

// Вивести квадрати чисел від 10 до 20.
console.log('');
console.log(8.2);
let str02 = '';
for (let i = 10; i <= 20; i++) {
    str02 += i**2 + ' ';
}
console.log(str02);

// Вивести таблицю множення на 7.
console.log('');
console.log(8.3);
for (let i = 1; i <= 10; i++) {
    console.log( `7 * ${i} = ${7 * i}` );
}

// Знайти суму всіх цілих чисел від 1 до 15.
console.log('');
console.log(8.4);
let sum04 = 0;
for (let i = 1; i <= 15; i++) {
    sum04 += i;
}
console.log(sum04);

// Знайти добуток усіх цілих чисел від 15 до 35.
console.log('');
console.log(8.5);
let product05 = 1;
for (let i = 15; i <= 35; i++) {
    product05 *= i;
}
console.log(product05);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
console.log('');
console.log(8.6);
let sum06 = 0;
let iterations = 0;
for (let i = 1; i <= 500; i++) {
    sum06 += i;
    iterations ++;
}
let arithmeticMean = sum06 / iterations;
console.log(arithmeticMean);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
console.log('');
console.log(8.7);
let sum07 = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum07 += i;
    }
}
console.log(sum07);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
console.log('');
console.log(8.8);
let str08 = '';
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        str08 += i + ' '
    }
}
console.log(str08);

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
//     Визначити кількість його парних дільників.
//     Знайти суму його парних дільників.
console.log('');
console.log(8.9);
let num09 = 12;
let divisors = '';
let quantityOfEvenDivisors = 0;
let sumOfEvenDivisors = 0;

for (let i = 1; i <= num09; i++) {
    if (num09 % i === 0) {
       divisors += i + ' ';
       if(i % 2 === 0) {
           sumOfEvenDivisors += i;
           quantityOfEvenDivisors++;
       }
    }
}

console.log('divisors:', divisors);
console.log('quantityOfEvenDivisors:', quantityOfEvenDivisors);
console.log('sumOfEvenDivisors:', sumOfEvenDivisors);

// Надрукувати повну таблицю множення від 1 до 10.
console.log('');
console.log('8.10');
console.log('multiplication table');

for (let i = 1; i <= 10; i++) {
    for (let k = 1; k <= 10; k++) {
        console.log(`${i} * ${k} = ${i * k}`);
    }
    console.log('');
}
