/*
    Є масив з посадами ['investor', 'manager', 'assistant', 'worker']
    Для кожної посади створити файл в форматі .json, який заповнити рандомними даними
    Зробити запит на масив з посадами і для кожної посади зробити запит на створений
    файл. (наприклад - manager -> manager.json)
    Дані з файлів вивести в таблицю на UI
    Зробити так, щоб запити були в строгій послідовності - всі посади від investor
    до worker (Щоб investor завжди виводився першим, worker - останнім)
 */

// ["investor", "manager", "assistant", "worker"]

let globalPositions;

const getWorker = (worker) => console.log('worker', worker);

const getAssistant = (assistant) => {
    console.log('assistant', assistant);
    getFile(`./files/${globalPositions[3]}.json`, getWorker);
};

const getManager = (manager) => {
    console.log('manager', manager);
    getFile(`./files/${globalPositions[2]}.json`, getAssistant);
};

const getInvestor = (investor) => {
    console.log('investor', investor);
    getFile(`./files/${globalPositions[1]}.json`, getManager);
};

const getPositions = (positions) => {
    globalPositions = positions;
    getFile(`./files/${positions[0]}.json`, getInvestor)
};

const getFile = (file, cb) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', file);
    xhr.send();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4) {
            const isStatus = xhr.status >= 200 && xhr.status < 400;
            const response = isStatus ? JSON.parse(xhr.response) : [];

            cb(response);
        }
    })
};

getFile('./files/positions.json', getPositions);