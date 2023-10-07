let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (numOrStr) {
    case null:
        console.log('ви скасували');
        break;
    case numOrStr.trim() === '' ? numOrStr : false:
        console.log('Empty String');
        break;
    case isNaN( +numOrStr ) ? numOrStr : false:
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}