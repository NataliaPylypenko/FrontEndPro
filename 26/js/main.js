/*
    В html маємо ієрархію ul.root>li{Item $}*3>ul*2>li{Item $}*5 (emmet pattern).
    1. Написати скрипт, який додасть клас `last` усім останнім li у групах.
    2. Написати функцію setFirstItemClassName(level), де level - це номер рівня вкладеності, у якому
    необхідно зробити зміни. Функція setFirstItemClassName має встановити першому li рівня клас `first`.
    * при додаванні класів - повинен змінитися колір фону на червоний (first) та зелений (last),
    з анімацією - затримка 2 секунди
 */

const setLastItemClassName = () => {
    const lists = document.querySelectorAll('ul');
    lists.forEach(li => li.lastElementChild.classList.add('last'));
};
setLastItemClassName();

const setFirstItemClassName = (level) => {
    const lists = document.querySelectorAll(`ul.root ${'ul'.repeat(level - 1)}`);
    lists.forEach(li => li.firstElementChild.classList.add('first'));
};
setFirstItemClassName(2);

document.querySelectorAll('.last').forEach(item => {
    setTimeout(() => {
        item.style.backgroundColor = 'forestgreen';
    }, 2000);
});

document.querySelectorAll('.first').forEach(item => {
    setTimeout(() => {
        item.style.backgroundColor = 'orangered';
    }, 2000);
});