let message = '';

let currentYear = new Date().getFullYear();
let maxAge = 120;

for (let i = 0; i < 1; i++) {
    let birthYear = prompt('What is your year of birth?');

    if (birthYear === null) {
        alert('It is a pity that you did not want to enter the city in which you live(');
    } else if (birthYear === '') {
        alert('You forgot to enter your year of birth!!!');
        i--;
    } else if (typeof +birthYear === "number" && parseInt(birthYear) > currentYear - maxAge && parseInt(birthYear) <= currentYear) {
        message += `You are ${currentYear - birthYear} years old. `
    } else {
        alert('You entered an incorrect value!!!');
        i--;
    }
}

for (let i = 0; i < 1; i++) {
    const city = getTrimString(prompt('In which city do you live?', ''));

    if (city === null) {
        alert('It is a pity that you did not want to enter the city in which you live(');
    } else if (city === '') {
        alert('You forgot to enter the city in which you live!!!');
        i--;
    } else {
        getPlaceOfResidence(city.toLowerCase());
    }
}

for (let i = 0; i < 1; i++) {
    let sport = getTrimString(prompt('What is your favorite sport?'));

    if (sport === null) {
        alert('It is a pity that you did not want to enter your favorite sport(');
    } else if (sport === '') {
        alert('You forgot to enter your favorite sport!!!');
        i--;
    } else {
        getChampionName(sport.toLowerCase());
    }
}

function getPlaceOfResidence(city) {
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
            message += `You live in the city of ${city.charAt(0).toUpperCase() + city.slice(1)}. `;
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

if (message) {
    alert(message);
} else {
    alert('You have not entered any information about yourself...');
}
