/*
  =================================
  ATM
 */

const getUserResponseNotEmpty = (message, data) => {
    let userResponse;

    do {
        userResponse = prompt(message);
    } while (!data.hasOwnProperty(userResponse));

    return userResponse;
};

const getMoney = file => {
    return new Promise(
        (resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', file);
            xhr.send();

            xhr.addEventListener('readystatechange', () => {
                if(xhr.readyState === 4) {
                    const isStatus = confirm('View the balance card?'); // ???
                    const result = JSON.parse(xhr.response);
                    const status = xhr.status;

                    isStatus ? resolve(result) : reject(status);
                }
            })
        }
    )
};

getMoney('./files/userData.json')
    .then(
        data => {
            const userResponse = getUserResponseNotEmpty('Enter the currency in which the balance will be displayed!', data);
            alert(`${data[userResponse]} ${userResponse}`)
        }
    )
    .catch(
        () => {
            return getFile('./files/bankData.json')
        }
    )
    .catch(
        data => {
            prompt('Enter the currency in which the cash withdrawal will be made!')
        }
    )
    .finally(
        () => {
            alert('Thank you, have a nice day 😊');
        }
    );
