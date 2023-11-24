/*
    У HTML створюємо квадрат
    За допомогою функції setInterval кожні пів секунди змінюємо колір фону квадрату на будь-який рандомний колір.
    За допомогою функції setInterval, кожну секунду переміщуємо квадрат на будь-яке місце в межах body. Для цього
    квадрату задаємо рандомні значення властивостей left та top. Квадрат не повинен виходити за межі body.
    Ширину будь-якого елементу можна знайти за допомогою властивості clientWidth.
    Висоту будь-якого елементу можна знайти за допомогою властивості clientHeight.
 */

const hash = '0123456789abcdef';
const lengthHash = hash.length;
const body = document.querySelector('body');
const block = document.querySelector('.block');
const bodyWidth = body.clientWidth;
const bodyHeight = body.clientHeight;
const blockWidth = block.clientWidth;
const blockHeight = block.clientHeight;

function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function generateColor(hash) {
    return [...Array(6)]
        .map( () => hash[randomInteger(0, lengthHash - 1)])
        .join('');
}

const setRandomColor = () => {
    block.style.backgroundColor = '#' + generateColor(hash);
};

function generateCoordinates() {
    return {
        top: randomInteger(0, bodyHeight - blockHeight - 1),
        left: randomInteger(0, bodyWidth - blockWidth - 1)
    }
}

const setCoordinatesFigure = () => {
    block.style.top = `${generateCoordinates().top}px`;
    block.style.left = `${generateCoordinates().left}px`;
};

setInterval(setRandomColor, 500);
setInterval(setCoordinatesFigure, 1000);