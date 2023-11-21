const pow = (num, degree) => {
    if(degree < 0) {
        return 'Invalid degree';
    }

    if (degree === 0) {
        return 1;
    }

    return num * pow(num, --degree);
};

console.log('3**-3:', pow(3, -3));
console.log('3**0:', pow(3, 0));
console.log('3**3:', pow(3, 3));
