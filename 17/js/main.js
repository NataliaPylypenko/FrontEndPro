// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д.

function func() {
    let sum = 0;
    return (num) => console.log(sum += num);
}

const sum = func();
sum(3);
sum(5);
sum(20);