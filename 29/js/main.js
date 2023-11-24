/*
    Створити квадрат і розмістити його по центру body.
    При натисканні на стрілки квадрат зміщується у відповідному напрямку на 10px. Квадрат не повинен виходити
    за межі body.
    При кожному "врізанні" в body - квадрат відстрибує на 10px * 2 (20px) у протилежному напрямку.
    При кожному відстрибуванні – по центру квадрату з'являється напис "БЕМС", який зникає через 2 секунди.
    При натисканні на пробіл – квадрат підстрибує на 10px вгору і повертається на початкове місце. Для плавності
    анімації можна використовувати transition.
    При натисканні на CTRL – квадрат присідає: зменшуємо його висоту на 40% і збільшуємо ширину на 25%. Для плавності
    анімації можна використовувати transition.
 */

const body = document.querySelector('body');
const block = document.querySelector('.block');

console.dir(block);

const handleSpace = () => {
    if (block.style.top === '') block.style.top = '0';
    block.style.top = `${parseInt(block.style.top) - 10}px`;
    setTimeout(() => block.style.top = `${parseInt(block.style.top) + 10}px`, 500);
};
const handleCtrl = () => {
    if (block.style.width === '') block.style.width = '100px';
    if (block.style.height === '') block.style.height = '100px';

    const blockClientWidth = block.clientWidth * 0.25;
    const blockClientHeight = block.clientHeight * 0.4;

    block.style.width = `${block.clientWidth + blockClientWidth}px`;
    block.style.height = `${block.clientHeight - blockClientHeight}px`;

    setTimeout(() => {
        block.style.width = `${block.clientWidth - blockClientWidth}px`;
        block.style.height = `${block.clientHeight + blockClientHeight}px`;
    }, 500);
};

const handleKeydown = (e) => {
    switch (e.code) {
        case 'ArrowRight':
            console.log('ArrowRight');
            break;
        case 'ArrowLeft':
            console.log('ArrowLeft');
            break;
        case 'ArrowUp':
            console.log('ArrowUp');
            break;
        case 'ArrowDown':
            console.log('ArrowDown');
            break;
        case 'Space':
            handleSpace();
            break;
        case 'ControlLeft':
        case 'ControlRight':
            handleCtrl();
            break;
    }
};

window.addEventListener('keydown', handleKeydown);