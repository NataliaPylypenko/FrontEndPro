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
const STEP_SIZE = 10;

const showBoom = () => {
    boom.style.display = 'block';
    setTimeout(() => boom.style.display = 'none', 2000);
};

const updatePosition = (direction, prop) => {
    if (block.style[prop] === '') block.style[prop] = '0';

    const blockStyleProp = parseInt(block.style[prop]);
    const movement = (prop === 'left') ? (bodyWidth - blockWidth) / 2 : (bodyHeight - blockHeight) / 2;

    if (direction === 'right' || direction === 'bottom') {
        if (movement - STEP_SIZE >= blockStyleProp) {
            block.style[prop] = `${blockStyleProp + STEP_SIZE}px`;
        } else {
            block.style[prop] = `${movement - 2 * STEP_SIZE}px`;
            showBoom();
        }
    } else {
        if (movement - STEP_SIZE >= -blockStyleProp) {
            block.style[prop] = `${blockStyleProp - STEP_SIZE}px`;
        } else {
            block.style[prop] = `${-movement + 2 * STEP_SIZE}px`;
            showBoom();
        }
    }
};

const handleKeydownArrow = (direction) => {
    if (direction === 'right' || direction === 'left') {
        updatePosition(direction, 'left');
    } else {
        updatePosition(direction, 'top');
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