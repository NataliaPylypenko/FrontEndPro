/*
    Дано 3 блоки
    В лівій частині сторінки - перелік категорій.
    При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
    Клік на товар - інформацію про товар у правому блоці.
    В інформації товару - кнопка “купити”.
    При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми
    (коли відображається лише список категорій).
 */

const categories = [
    {
        "id": 1,
        "name": "Електроніка",
        "products": [
            {
                "id": 101,
                "name": "Смартфон",
                "price": 599.99
            },
            {
                "id": 102,
                "name": "Ноутбук",
                "price": 1299.99
            }
        ]
    },
    {
        "id": 2,
        "name": "Одяг",
        "products": [
            {
                "id": 201,
                "name": "Футболка",
                "price": 19.99
            },
            {
                "id": 202,
                "name": "Джинси",
                "price": 49.99
            }
        ]
    },
    {
        "id": 3,
        "name": "Книги",
        "products": [
            {
                "id": 301,
                "name": "Роман",
                "price": 14.99
            },
            {
                "id": 302,
                "name": "Наукова книга",
                "price": 24.99
            }
        ]
    }
];

class WebStore {

    constructor() {
        this.renderCategories();
    }

    generateCategories() {
        const ul = document.createElement('ul');
        ul.classList.add('categoriesList');

        categories.forEach((category, i) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute("href", "#");
            a.innerHTML = category.name;
            li.appendChild(a);
            ul.appendChild(li);

            i === 0 && this.setActiveCategory(a);
        });

        return ul;
    }

    renderCategories() {
        const categoriesBlock = document.querySelector('#categoriesBlock');
        categoriesBlock.appendChild(this.generateCategories());
    }

    removeActiveCategory(item) {
        item.classList.remove('active');
    }

    setActiveCategory(item) {
        item.classList.add('active');
    }

    renderProducts() {
        const productsBlock = document.querySelector('#productsBlock');
    }

    renderProductDetails() {
        const productDetailsBlock = document.querySelector('#productDetailsBlock');
    }

    buyProduct() {
        const toBuy = document.querySelector('#toBuy');
    }
}

const webStore = new WebStore();

const handlerClick = (e) => {
    const currentActiveLi = e.currentTarget.querySelector('.active');
    currentActiveLi && webStore.removeActiveCategory(currentActiveLi);
    webStore.setActiveCategory(e.target);
};
const categoriesBlock = document.querySelector('#categoriesBlock');
categoriesBlock.addEventListener('click', handlerClick);
