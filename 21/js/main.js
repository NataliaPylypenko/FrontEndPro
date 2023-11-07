/*
    Вам потрібно зробити конструктор сутності "Студент".

    Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість.
    І є можливість отримати вік студента та його середній бал – це методи.

    Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів.
    Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце,
    в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того,
    щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – ​​методи.

    Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять),
    і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
    якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

    Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів)
    і показати використання цих методів.
*/

class Student {
    constructor(name, surname, yearOfBirth, scores) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.scores = scores;
        this.attendances = new Array(25);
    }

    getAge() {
        return new Date().getFullYear() - this.yearOfBirth;
    }

    _getAverageScore() {
        return this.scores.reduce((acc, item) => acc + item, 0) / this.scores.length;
    }

    _getAverageAttendances() {
        return this.attendances.filter(item => item === true).length / this.attendances.length;
    }

    present() {
        const index = this.attendances.findIndex(item => item === undefined);
        index !== -1 ? this.attendances[index] = true : console.log('The attendance array cannot contain more than 25 records!');
        return this;
    }

    absent() {
        const index = this.attendances.findIndex(item => item === undefined);
        index !== -1 ? this.attendances[index] = false : console.log('The attendance array cannot contain more than 25 records!');
        return this;
    }

    summary() {
        if(this._getAverageScore() >= 90 && this._getAverageAttendances() >= 0.9) {
           return 'Well done!';
        } else if (this._getAverageScore() >= 90 || this._getAverageAttendances() >= 0.9) {
            return 'Good, but it can be better!';
        } else {
            return 'Radish(';
        }
    }
}

let student1 = new Student('Lisa', 'Simpson', 2011, [99, 92, 98, 88, 100, 91, 91]);
let student2 = new Student('Dipper', 'Pines', 2010,[98, 88, 100, 91, 91, 99, 92]);
let student3 = new Student('Bart', 'Simpson', 2009, [64, 58, 68, 71, 65, 63, 72, 74]);

student1.present().present().present().present().present().present().present().present().present().present()
    .present().present().present().present().present().present().present().present().present().present()
    .present().present().present().present().absent();

console.log(student1.name, student1.surname);
console.log(student1.attendances);
console.log(student1.getAge());
console.log(student1.summary());
console.log('-----------------');

student2.absent().absent().present().present().present().present().present().present().present().present()
    .present().present().present().present().present().present().present().present().present().present()
    .present().present().absent().absent();

console.log(student2.name, student2.surname);
console.log(student2.attendances);
console.log('empty element:', student2.attendances[25]);
console.log(student2.getAge());
console.log(student2.summary());
console.log('-----------------');

student3.absent().absent().present().present().present().present().present().present().present().present()
    .present().present().present().present().present().present().present().present().present().present()
    .present().present().absent().absent().absent().absent();

console.log(student3.name, student3.surname);
console.log(student3.attendances);
console.log(student3.getAge());
console.log(student3.summary());
console.log('-----------------');
