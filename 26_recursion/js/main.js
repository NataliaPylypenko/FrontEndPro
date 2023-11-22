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

const root = document.querySelector('ul.root');
const setFirstItemClassName = (ul, level) => {
    level--;

    if(level === 0) {
        ul.firstElementChild.classList.add('first');
    } else {
        const ulChildren = [...ul.children];

        ulChildren.forEach(li => {
            const liChildren = [...li.children];
            liChildren.forEach(ul => setFirstItemClassName(ul, level))
        })
    }
};

setFirstItemClassName(root, 3);


