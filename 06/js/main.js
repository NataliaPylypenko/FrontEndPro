let message = '';
let currentYear = new Date().getFullYear();

let birthYear = prompt('What is your year of birth?');
if(!isNaN(birthYear) && parseInt(birthYear) > 1923 && parseInt(birthYear) <= currentYear) {
    message += `You are ${currentYear - birthYear} years old. `
} else if (birthYear === null) {
    alert('It is a pity that you did not want to enter your year of birth(');
} else {
    alert('You did not enter anything or entered an incorrect value!!!');
}

let city = prompt('In which city do you live?');
city = upFirsLetter(getTrimString(city));
if (city === null) {
    alert('It is a pity that you did not want to enter the city in which you live(');
} else if (city === '') {
    alert('You did not enter anything!!!');
} else {
    getCountry(city);
}

let sport = prompt('What is your favorite sport?');
sport = getTrimString(sport);
if (sport === null) {
    alert('It is a pity that you did not want to enter your favorite sport(');
} else if (sport === '') {
    alert('You did not enter anything!!!');
} else {
    getChampionName(sport);
}

function getCountry(city) {
    switch (city) {
        case 'Київ':
        case 'Kyiv':
            message += 'You live in the capital of Ukraine. ';
            break;
        case 'Вашингтон':
        case 'Washington':
            message += 'You live in the capital of the United States of America. ';
            break;
        case 'Лондон':
        case 'London':
            message += 'You live in the capital of Great Britain. ';
            break;
        default:
            message += `You live in the city of ${city}. `;
    }

    return message;
}

function getChampionName(sport) {
    switch (sport) {
        case 'футбол':
        case 'football':
            message += 'Cool! Do you want to be like Lionel Messi?';
            break;
        case 'автогонки':
        case 'auto racing':
            message += 'Cool! Do you want to be like Lewis Hamilton?';
            break;
        case 'плавання':
        case 'swimming':
            message += 'Cool! Do you want to be like Jana Klochkova?';
            break;
        default:
            message += `You like ${sport}. `;
    }

    return message;
}

function getTrimString(str) {
    if (str === null) return str;
    return str.trim();
}

function upFirsLetter(word) {
    if (typeof word !== 'string' || word.length === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
}

if (message) {
    alert(message);
}
