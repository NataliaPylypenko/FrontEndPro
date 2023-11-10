/*
    Мережа фастфудів пропонує кілька видів гамбургерів:
    маленький (50 тугриків, 20 калорій);
    великий (100 тугриків, 40 калорій).

    Гамбургер може бути з одним із декількох видів начинок:
    сиром (+ 10 тугриків, + 20 калорій);
    салатом (+ 20 тугриків, + 5 калорій);
    картоплею (+ 15 тугриків, + 10 калорій).

    Можна додати добавки:
    посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).
    Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.

    (підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)
 */

class Hamburger {
    static SIZE_BIG = 'big';
    static SIZE_SMALL = 'small';

    static STUFFING_CHEESE = 'cheese';
    static STUFFING_SALAD = 'salad';
    static STUFFING_POTATO = 'potato';

    static TOPPING_SEASONING = 'seasoning';
    static TOPPING_MAYONNAISE = 'mayonnaise';

    price = 0;
    calories = 0;

    constructor(size, stuffing){
        this.size = size;
        this.stuffing = stuffing;
    }

    addTopping(toppingType) {
        let toppingPrice = toppingType === 'seasoning' ? 15 : 20;
        let toppingCalories = toppingType === 'seasoning' ? 0 : 5;

        this.price += toppingPrice;
        this.calories += toppingCalories;

        return this.price;
    }

    calculatePrice() {
        this.price += this.size === 'big' ? 100 : 50;

        switch (this.stuffing) {
            case 'cheese':
                this.price += 10;
                break;
            case 'salad':
                this.price += 20;
                break;
            case 'potato':
                this.price += 15;
                break;
            default:
                console.log('Not available');
                this.price += 0;
        }

        return this.price;
    }

    calculateCalories() {
        this.calories += this.size === 'big' ? 40 : 20;

        switch (this.stuffing) {
            case 'cheese':
                this.calories += 20;
                break;
            case 'salad':
                this.calories += 5;
                break;
            case 'potato':
                this.calories += 10;
                break;
            default:
                console.log('Not available');
                this.calories += 0
        }

        return this.calories;
    }
}


// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYONNAISE);

// запитаємо скільки там калорій
console.log(`Calories: ${hamburger.calculateCalories()}`);

// скільки коштує
console.log(`Price: ${hamburger.calculatePrice()}`);

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SEASONING);

// А скільки тепер калорій?
console.log(`Calories with sauce: ${hamburger.calculateCalories()}`);

// А скільки тепер коштує?
console.log(`Price with sauce: ${hamburger.calculatePrice()}`);
