/*
    Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
 */

const root = document.querySelector('#root');
const table = document.createElement('table');
let num = 1;

for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');

    for (let k = 0; k < 10; k++) {
        const td = document.createElement('td');
        td.textContent = num;
        num++;
        tr.appendChild(td);
    }

    table.appendChild(tr)
}

root.appendChild(table);
