/*
    Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
 */

const root = document.querySelector('#root');
const table = document.createElement('table');

for (let i = 0; i < 100; i += 10) {
    const tr = document.createElement('tr');

    for (let k = 1; k <= 10; k++) {
        const td = document.createElement('td');
        td.textContent = i + k;
        tr.appendChild(td);
    }

    table.appendChild(tr)
}

root.appendChild(table);
