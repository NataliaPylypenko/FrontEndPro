let message = '';

let currentYear = new Date().getFullYear();
let birthYear = prompt('What is your year of birth?');
if(!isNaN(birthYear) && parseInt(birthYear) > currentYear - 120 && parseInt(birthYear) <= currentYear) {
    message += `You are ${currentYear - birthYear} years old. `
} else if (birthYear === null || getTrimString(birthYear) === '') {
    alert('It is a pity that you did not want to enter your year of birth(');
} else {
    alert('You entered an incorrect value!!!');
}

let city = prompt('In which city do you live?');
city = getTrimString(city);
if (city === null || city === '') {
    alert('It is a pity that you did not want to enter the city in which you live(');
} else if (!isNaN(city)) {
    alert('You did not enter anything!!!');
} else {
    getCountry(city.toLowerCase());
}

let sport = prompt('What is your favorite sport?');
sport = getTrimString(sport);
if (sport === null || sport === '') {
    alert('It is a pity that you did not want to enter your favorite sport(');
} else if (!isNaN(sport)) {
    alert('You did not enter anything!!!');
} else {
    getChampionName(sport.toLowerCase());
}

function getCountry(city) {
    switch (city) {
        case 'київ':
        case 'kyiv':
            message += 'You live in the capital of Ukraine. ';
            break;
        case 'вашингтон':
        case 'washington':
            message += 'You live in the capital of the United States of America. ';
            break;
        case 'лондон':
        case 'london':
            message += 'You live in the capital of Great Britain. ';
            break;
        default:
            message += `You live in the city of ${upFirsLetter(city)}. `;
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
