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
const boom = document.querySelector('.boom');
const bodyWidth = body.clientWidth;
const bodyHeight = body.clientHeight;
const blockWidth = block.clientWidth;
const blockHeight = block.clientHeight;
const MOVE = 10;

const showBoom = () => {
    setTimeout(() => boom.style.display = 'block', 500);
    setTimeout(() => boom.style.display = 'none', 2500);
};

const handleKeydownArrow = (direction) => {
    if (block.style.top === '') block.style.top = '0';
    if (block.style.left === '') block.style.left = '0';

    const blockStyleLeft = parseInt(block.style.left);
    const blockStyleTop = parseInt(block.style.top);

    const movementWidth = (bodyWidth - blockWidth) / 2;
    const movementHeight = (bodyHeight - blockHeight) / 2;

    if(direction === 'right') {
        if(movementWidth - MOVE >= blockStyleLeft) {
            block.style.left = `${blockStyleLeft + MOVE}px`;
        } else {
            block.style.left = `${movementWidth - 2 * MOVE}px`;
            showBoom();
        }
    } else if(direction === 'left') {
        if(movementWidth - MOVE >= -blockStyleLeft) {
            block.style.left = `${blockStyleLeft - MOVE}px`;
        } else {
            block.style.left = `${-movementWidth + 2 * MOVE}px`;
            showBoom();
        }
    } else if(direction === 'top') {
        if(movementHeight - MOVE >= -blockStyleTop) {
            block.style.top = `${blockStyleTop - MOVE}px`;
        } else {
            block.style.top = `${-movementHeight + 2 * MOVE}px`;
            showBoom();
        }
    } else if(direction === 'bottom') {
        if(movementHeight - MOVE >= blockStyleTop) {
            block.style.top = `${blockStyleTop + MOVE}px`;
        } else {
            block.style.top = `${movementHeight - 2 * MOVE}px`;
            showBoom();
        }
    }
};

const handleKeydownSpace = () => {
    if (block.style.top === '') block.style.top = '0';

    block.style.top = `${parseInt(block.style.top) - 10}px`;

    setTimeout(() => block.style.top = `${parseInt(block.style.top) + 10}px`, 500);
};

const handleKeydownCtrl = () => {
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
            handleKeydownArrow('right');
            break;
        case 'ArrowLeft':
            handleKeydownArrow('left');
            break;
        case 'ArrowUp':
            handleKeydownArrow('top');
            break;
        case 'ArrowDown':
            handleKeydownArrow('bottom');
            break;
        case 'Space':
            handleKeydownSpace();
            break;
        case 'ControlLeft':
        case 'ControlRight':
            handleKeydownCtrl();
            break;
    }
};

window.addEventListener('keydown', handleKeydown);