/*
    На сторінці є дві кнопки. При натисканні на першу кнопку просимо користувача ввести в prompt посилання,
    при натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням). Реалізувати
    перевірку на http/https. Якщо протокол не вказано – додаємо.
 */

const btnPrompt = document.querySelector('.btnPrompt');
const btnLink = document.querySelector('.btnLink');

let enteredLink = '';

const getUserResponseNotEmpty = (message) => {
    let userResponse;
    do {
        userResponse = prompt(message);
    } while (userResponse === null || userResponse.trim() === '');

    return userResponse;
};

const addProtocol = (link) => {
    return link.substring(0, 4) === 'http' ? link : `http://${link}`;
};

const handlerClickBtnPrompt = () => enteredLink = addProtocol(getUserResponseNotEmpty('Enter the link'));
const handlerClickBtnLink = () => enteredLink ? window.location.href = enteredLink : alert('Please enter the link!');

btnPrompt.addEventListener('click', handlerClickBtnPrompt);
btnLink.addEventListener('click', handlerClickBtnLink);
