/*
* Створити окремий файл
* Проставити true || false навпроти кожного console.log
* Під кожним console.log() - написати в коментарях пояснення
 */

console.log({}.prototype === {}.prototype); // true
// в обох випадках underfined
// prototype застосовується до функції конструктора Object, а не до самого об'єкта

function sayHello1() {};
console.log(sayHello1.prototype === sayHello1.__proto__); // false
// sayHello1.prototype i sayHello1.__proto__ це різні об'єкти
// sayHello1.__proto__ буде посилатися на prototype функції конструктора Function, а не на свій prototype

function sayHello() {};
function sayGoodBye() {};
console.log(sayHello.__proto__ === sayGoodBye.__proto__); // true
// __proto__ двох різних функцій посилається на один і той же функції конструктора Function

console.log(sayHello.prototype === sayGoodBye.prototype); // false
// Кожна функція має властивість прототипу, але ця властивість для різних функцій різна

let arrowFunc = () => {};
console.log(arrowFunc.prototype === Object.prototype); // false
// порівнюється prototype функції і prototype функції конструктора Object, а вони не є спільними

let age = 22;
console.log(age.prototype === Number.prototype); // false
// примітивні значення не мають властивості prototype

console.log(age.__proto__ === Number.prototype); // true
// __proto__ екземпляра посилається на prototype батьківської функції конструктора

function Test() {}
console.log(Test.__proto__ === Function.prototype);
// Test.__proto__  посилається на prototype функції конструктора Function

let num = 77;
console.log(num.__proto__ === Number.prototype);
// num.__proto__  посилається на prototype функції конструктора Number