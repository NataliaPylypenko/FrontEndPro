/*
    Створити клас SuperMath.

    Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak.
    Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. Якщо хоче,
    зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових
    даних через метод input() класу SuperMath.

    Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.

    При введенні znak потрібно перевірити коректність введення на можливі математичні дії.
 */

class SuperMath {
    OPERATIONS = {
        '+': (x, y) => `${x} + ${y} = ${x + y}`,
        '-': (x, y) => `${x} - ${y} = ${x - y}`,
        '*': (x, y) => `${x} * ${y} = ${x * y}`,
        '/': (x, y) => (y !== 0 ? `${x} / ${y} = ${x / y}` : 'Cannot be divided by zero. Try again!'),
        '%': (x, y) => (y !== 0 ? `${x} % ${y} = ${x % y}` : 'Cannot be divided by zero. Try again!'),
        '^': (x, y) => `${x} ^ ${y} = ${x ** y}`
    };

    #getUserResponseInteger(message) {
        let userResponse;
        do {
            userResponse = parseInt(prompt(message));
        } while (!Number.isInteger(userResponse));

        return userResponse;
    };

    #getUserResponseNotEmpty(message) {
        let userResponse;
        do {
            userResponse = prompt(message);
        } while (userResponse === null || userResponse.trim() === '');

        return userResponse;
    };


    check(obj) {
        const operation = this.OPERATIONS[obj.znak];
        return operation ? operation(obj.X, obj.Y) : 'Invalid operator. Try again!';
    }

    input() {
        return {
            X: this.#getUserResponseInteger('Enter the first number'),
            znak: this.#getUserResponseNotEmpty('Enter mathematical operation'),
            Y: this.#getUserResponseInteger('Enter the second number'),
        };
    }
}

p = new SuperMath();

const obj = p.input();
console.log(p.check(obj));