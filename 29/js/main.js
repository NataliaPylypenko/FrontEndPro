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

function Box(block) {
    const body = document.querySelector('body');
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

    block.style.top = `${(bodyHeight - blockHeight) / 2}px`;
    block.style.left = `${(bodyWidth - blockWidth) / 2}px`;

    return {
        moveUp: () => {
            if (parseInt(block.style.top) <= 0) {
                showBoom();
                block.style.top = `${STEP_SIZE * 2}px`;
                return;
            }
            block.style.top = `${parseInt(block.style.top) - STEP_SIZE}px`
        },
        moveDown: () => {
            if (parseInt(block.style.top) + blockHeight >= bodyHeight) {
                showBoom();
                block.style.top = `${bodyHeight - blockHeight - STEP_SIZE * 2}px`;
                return;
            }
            block.style.top = `${parseInt(block.style.top) + STEP_SIZE}px`;
        },
        moveRight: () => {
            if (parseInt(block.style.left) + blockWidth >= bodyWidth) {
                showBoom();
                block.style.left = `${bodyWidth - blockWidth - STEP_SIZE * 2}px`;
                return;
            }
            block.style.left = `${parseInt(block.style.left) + STEP_SIZE}px`;
        },
        moveLeft: () => {
            if (parseInt(block.style.left) <= 0) {
                showBoom();
                block.style.left = `${STEP_SIZE * 2}px`;
                return;
            }
            block.style.left = `${parseInt(block.style.left) - STEP_SIZE}px`;
        },
        bounce: () => {
            block.style.top = `${parseInt(block.style.top) - STEP_SIZE}px`;

            if (parseInt(block.style.top) <= 0) {
                showBoom();
                block.style.top = `${STEP_SIZE * 2}px`;
                return;
            }

            setTimeout(() => block.style.top = `${parseInt(block.style.top) + STEP_SIZE}px`, 400)
        },
        satDown: () => {
            block.style.height = `${blockHeight - blockHeight * 0.4}px`;
            block.style.top = `${parseInt(block.style.top) + blockHeight * 0.2}px`;

            block.style.width = `${blockWidth + blockWidth * 0.25}px`;
            block.style.left = `${parseInt(block.style.left) - blockWidth * 0.25 / 2}px`;

            setTimeout(() => {
                block.style.height = `${blockHeight}px`;
                block.style.top = `${parseInt( block.style.top) - blockHeight * 0.2}px`;
                block.style.width = `${blockWidth}px`;
                block.style.left = `${parseInt(block.style.left) + blockWidth * 0.25 / 2}px`;
            }, 400);

            if (parseInt(block.style.left) + parseInt(block.style.width) >= bodyWidth) {
                showBoom();
                block.style.left = `${bodyWidth - blockWidth - STEP_SIZE * 3}px`;
                return;
            }

            if (parseInt(block.style.left) <= 0) {
                showBoom();
                block.style.left = `${STEP_SIZE * 2}px`;
                return;
            }
        }
    };
}

const box = new Box(document.querySelector('.block'));

const handleKeydown = (e) => {
    switch (e.code) {
        case 'ArrowRight':
            box.moveRight();
            break;
        case 'ArrowLeft':
            box.moveLeft();
            break;
        case 'ArrowUp':
            box.moveUp();
            break;
        case 'ArrowDown':
            box.moveDown();
            break;
        case 'Space':
            box.bounce();
            break;
        case 'ControlLeft':
        case 'ControlRight':
            box.satDown();
            break;
    }
};

window.addEventListener('keydown', handleKeydown);