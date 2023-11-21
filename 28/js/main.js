let result = 1;

const pow = (num, degree) => {
    result *= num;
    degree--;

    if(degree > 0) {
        pow(num, degree);
    }

    return result;
};

console.log(pow(3, 3));
