function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const length = 16;

function generateKey(keyLength, characters) {
    let str = '';

    for (let i = 1; i <= keyLength; i++) {
        str += characters[randomInteger(0, characters.length - 1)];
    }

    return str;
}

const key = generateKey(length, characters);
console.log(key);

console.log(key.length);