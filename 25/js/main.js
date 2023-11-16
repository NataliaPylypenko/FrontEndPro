/*
    Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
 */

const root = document.querySelector('#root');

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');

for (let i = 1; i <= 100; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    gridItem.textContent = i;

    gridContainer.appendChild(gridItem)
}

root.appendChild(gridContainer);
