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
    SIZE = {
        big: {
            price: 100,
            calories: 40
        },
        small: {
            price: 50,
            calories: 20
        }
    };

    STUFFING = {
        cheese: {
            price: 10,
            calories: 20
        },
        salad: {
            price: 20,
            calories: 5
        },
        potato: {
            price: 15,
            calories: 10
        }
    };

    TOPPING = {
        seasoning: {
            price: 15,
            calories: 0
        },
        mayonnaise: {
            price: 20,
            calories: 5
        }
    };

    constructor(size, stuffing){
        this.price = this.SIZE[size].price + this.STUFFING[stuffing].price;
        this.calories = this.SIZE[size].calories + this.STUFFING[stuffing].calories;
    }

    addTopping(toppingType) {
        this.price += this.TOPPING[toppingType].price;
        this.calories += this.TOPPING[toppingType].calories;

        return this;
    }

    calculatePrice() {
        return this.price;
    }

    calculateCalories() {
        return this.calories;
    }
}


// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger('small', 'cheese');

// добавка з майонезу
hamburger.addTopping('mayonnaise');

// запитаємо скільки там калорій
console.log(`Calories: ${hamburger.calculateCalories()}`);

// скільки коштує
console.log(`Price: ${hamburger.calculatePrice()}`);

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping('seasoning');

// А скільки тепер калорій?
console.log(`Calories with sauce: ${hamburger.calculateCalories()}`);

// А скільки тепер коштує?
console.log(`Price with sauce: ${hamburger.calculatePrice()}`);
