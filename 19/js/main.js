/*
    1. Створити клас Людина.

    Властивості:
    імʼя;
    стать.
    Методи:
    конструктор, який приймає два параметри: імʼя та стать.

     2. Створити клас Квартира.

    Властивості:
    конструктор не потрібен;
    масив жителів, який при створенні пустий.
    Методи:
    додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

    3. Створити клас Будинок.

    Властивості:
    масив квартир, який при створенні пустий;
    максимальна кількість квартир.
    Методи:
    конструктор, який приймає один параметр: максимальну кількість квартир;
    додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти,
    чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру,
    в іншому випадку виводить у консоль відповідне повідомлення.

    В якості демонстраціїї створити:

    декілька екземплярів класу Людина;
    декілька екземплярів класу Квартира;
    додадити екземпляри класу Людина до екземплярів класу Квартира;
    екземпляр класу Будинок;
    додадити екземпляри класу Квартира до екземплярів класу Будинок.
*/

class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Flat {
    residents = [];

    addResident(person) {
        person instanceof Person
            ? this.residents.push(person)
            : console.log('Error: Add an instance of the Person class!');
    }
}

class House {
    flats = [];

    constructor(maxApartments) {
        this.maxApartments = maxApartments;
    };

    addFlat(flat) {
        if (flat instanceof Flat) {
            this.flats.length < this.maxApartments
                ? this.flats.push(flat)
                : console.log(`Error: This house contains only ${this.maxApartments} apartments`)
        } else {
            console.log('Error: Add an instance of the Flat class!');
        }
    }
}

let person1 = new Person('Marge', 'female');
let person2 = new Person('Homer', 'male');
let person3 = new Person('Bart', 'male');
let person4 = new Person('Lisa', 'female');
let person5 = new Person('Maggie', 'female');
let person6 = new Person('Stan', 'male');
let person7 = new Person('Dipper', 'male');
let person8 = new Person('Mabel', 'female');
let person9 = new Person('Wendy', 'female');
let person10 = new Person('Bender', 'another');
let person11 = 'Anna';

let flat1 = new Flat();
let flat2 = new Flat();
let flat3 = new Flat();
let flat4 = new Flat();
let flat5 = 'apartments';
let flat6 = new Flat();

flat1.addResident(person1);
flat1.addResident(person2);
flat1.addResident(person3);
flat1.addResident(person4);
flat1.addResident(person5);
flat2.addResident(person6);
flat2.addResident(person7);
flat2.addResident(person8);
flat3.addResident(person9);
flat4.addResident(person10);
flat6.addResident(person11);

console.log(flat1.residents);
console.log(flat2.residents);
console.log(flat3.residents);
console.log(flat4.residents);
console.log(flat5.residents);
console.log(flat6.residents);

let house = new House(5);

house.addFlat(flat1);
house.addFlat(flat2);
house.addFlat(flat3);
house.addFlat(flat4);
house.addFlat(flat5);
house.addFlat(flat6);

console.log(house.flats);
