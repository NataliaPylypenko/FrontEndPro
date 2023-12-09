/*
  =================================
  ATM
 */

const userData = {
    USD: 1000,
    EUR: 900,
    UAH: 15000,
    BIF: 20000,
    AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
};

const geSuitableCurrency = (userData, bankData, userResponse) => {
    if (!bankData.hasOwnProperty(userResponse) || !userData.hasOwnProperty(userResponse)) {
        return false;
    } else if (bankData[userResponse].max === 0) {
        alert('At the moment there are no notes of this currency!');
        return false;
    } else if (userData[userResponse] < bankData[userResponse].min) {
        alert('You don\'t have enough funds!');
        return false;
    }

    return true;
};

const geSuitableInteger = (userData, bankData, currency, userResponse) => {
    const min = bankData[currency]['min'];
    const max = Math.min(bankData[currency]['max'], userData[currency]);

    if (userResponse > max) {
        alert(`The amount entered is greater than available. Maximum withdrawal amount: ${max}`);
        return false;
    } else if (userResponse <= min) {
        alert(`The amount entered is less than available. Minimum withdrawal amount: ${min}`);
        return false;
    }

    return true;
};

const getUserResponse = (data, message) => {
    let userResponse;

    do {
        userResponse = prompt(message);
    } while (!data.hasOwnProperty(userResponse));

    return userResponse;
};

const getUserResponseCurrency = (userData, bankData, message) => {
    let userResponse;

    do {
        userResponse = prompt(message);
    } while (!geSuitableCurrency(userData, bankData, userResponse));

    return userResponse;
};

const getUserResponseInteger = (userData, bankData, currency, message) => {
    let userResponse;

    do {
        userResponse = parseInt(prompt(message));
    } while (!geSuitableInteger(userData, bankData, currency, userResponse));

    return userResponse;
};

const getMoney = (userData, bankData) => {
    return new Promise(
        (resolve, reject) => {
            const isStatus = confirm('View the balance card?');
            isStatus ? resolve(userData) : reject({userData, bankData});
        }
    )
};

getMoney(userData, bankData)
    .then(
        (userData) => {
            const currency = getUserResponse(userData, 'Enter the currency in which the balance will be displayed!');
            alert(`The balance is: ${userData[currency]} ${currency}`)
        },
        ({userData, bankData}) => {
            const currency = getUserResponseCurrency(userData, bankData, 'Enter the currency for cash withdrawal');
            const amount = getUserResponseInteger(userData, bankData, currency, 'Enter the withdrawal amount');

            alert(`Here is your money ${amount} ${currency} ${bankData[currency]['img']}`);
        }
    )
    .catch(() => console.error(new Error('Something went wrong')))
    .finally(() => alert('Thank you, have a nice day 😊'));


