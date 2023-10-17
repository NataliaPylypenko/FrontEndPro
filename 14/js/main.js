function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

const length = 16;
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const lengthCharacters = characters.length;

function generateKey(keyLength, characters) {
    return [...Array(keyLength)]
        .map( () => characters[randomInteger(0, lengthCharacters - 1)])
        .join('');
}

const key = generateKey(length, characters);
console.log(key);