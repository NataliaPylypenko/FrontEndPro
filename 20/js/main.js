/*
    1. Створити сутність "Людина".

    Властивості:
    імʼя;
    вік.
    Методи:
    конструктор, який приймає два параметри: імʼя та вік;
    метод, який виводить у консоль інформацію про людину.

    2. Створити сутність "Автомобіль".

    Властивості:
    марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
    власник.
    Методи:
    конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
    присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
    метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника

    В якості демонстраціїї створити:

    декілька екземплярів класу Людина;
    декілька екземплярів класу Автомобіль;
    присвоїти власників автомобілям.
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfoPerson() {
        console.log(`name: ${this.name}, age: ${this.age}`);
    }
}

class Car {
    carOwner;

    constructor(carBrand, model, yearOfIssue, numberPlate) {
        this.carBrand = carBrand;
        this.model = model;
        this.yearOfIssue = yearOfIssue;
        this.numberPlate = numberPlate;
    }

    assignOwnerCar(person) {
        if (person instanceof Person) {
            person.age >= 18
                ? this.carOwner = person
                : console.log(`Error: ${person.name} you are not 18 yet!`)
        } else {
            console.log('Error: Add an instance of the Person class!');
        }
    }

    showInfoCar() {
        console.log(`carBrand: ${this.carBrand}, model: ${this.model}, yearOfIssue: ${this.yearOfIssue}, numberPlate: ${this.numberPlate}`);
        this.carOwner && this.carOwner.showInfoPerson()
    }
}

let person1 = new Person('Marge', 39);
let person2 = new Person('Homer', 41);
let person3 = new Person('Bart', 15);
let person4 = new Person('Wendy', 19);
let person5 = 'Hello';

let car1 = new Car('lexus', 'model1', 1996, 'AE1996EK');
let car2 = new Car('ford', 'model2', 1997, 'AE1997EK');
let car3 = new Car('chevrolet', 'model3', 1998, 'AE1998EK');
let car4 = new Car('bmw', 'model4', 1999, 'AE1999EK');

car1.assignOwnerCar(person1);
car2.assignOwnerCar(person2);
car3.assignOwnerCar(person3);
car4.assignOwnerCar(person4);
car4.assignOwnerCar(person5);

console.log('-------------');
car1.showInfoCar();
console.log('-------------');
car2.showInfoCar();
console.log('-------------');
car3.showInfoCar();
console.log('-------------');
car4.showInfoCar();
console.log('-------------');

console.log('car1', car1);
console.log('car2', car2);
console.log('car3', car3);
console.log('car4', car4);

