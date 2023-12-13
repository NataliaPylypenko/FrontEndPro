const refs = {
    apiUrl: 'https://api.chucknorris.io/jokes/',
    jokesCategories: document.querySelector('#jokesCategories'),
    jokesList: document.querySelector('#jokesList'),
};

const getFile = file => fetch(file)
    .then(data => {
        return data.ok ? data.json() : Promise.reject(data.statusText)
    });

// renders

const renderCategories = (categories) => {
    return refs.jokesCategories.innerHTML = categories.map(category => `<option>${category}</option>`).join('');
};

const renderJoke = (joke) => {
    return refs.jokesList.innerHTML = `
        <li>
            <p>Category: <b>${joke.categories[0]}</b></p>
            <p>${joke.value}</p>
            <button>Remove joke</button>
        </li>
    `
};

// get data

getFile(`${refs.apiUrl}categories`)
    .then(categories => renderCategories(categories))
    .catch(err => console.log(err));

const handleChangeCategory = (e) => {
    const selectedCategory = refs.jokesCategories.value;

    getFile(`${refs.apiUrl}random?category=${selectedCategory}`)
        .then(joke => {
            const previousOption = [...refs.jokesCategories.options].find(element => element.value === joke.categories[0]);
            if (previousOption) previousOption.disabled = false;

            [...refs.jokesCategories.options].find(element => element.value === selectedCategory).disabled = true;
            renderJoke(joke);
        })
        .catch(err => console.log(err));
};

// handlers

const handleClickBtn = (e) => {
    if(e.target.tagName === 'BUTTON') {
        e.preventDefault();

        [...refs.jokesCategories.options].find(element => element.value === refs.jokesCategories.value).disabled = false;
        e.target.parentElement.innerHTML = '';
    }
};

refs.jokesCategories.addEventListener('change', handleChangeCategory);

refs.jokesList.addEventListener('click', handleClickBtn);





