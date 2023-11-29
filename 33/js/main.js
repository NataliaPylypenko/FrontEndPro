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

class CategoryList {
    constructor(element) {
        this.element = element;
        this.render();
    }

    unsetActiveCategory(item) {
        item.classList.remove('active');
    }

    setActiveCategory(item) {
        item.classList.add('active');
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

    render() {
        this.element.appendChild(this.generateCategories());
    }

    onCategorySelect(callback) {
        this.element.addEventListener('click', callback);
    }
}

class AppController {
    constructor(categoryList) {
        this.categoryList = categoryList;
    }

    initialize() {
        this.categoryList.onCategorySelect((e) => {
            this.handlerClick(e);
            const products = this.getProductsByCategory(1);
            console.log(products);
        });
    }

    handlerClick = (e) => {
        const currentActiveLi = e.currentTarget.querySelector('.active');
        currentActiveLi && this.categoryList.unsetActiveCategory(currentActiveLi);
        this.categoryList.setActiveCategory(e.target);
    };

    getProductsByCategory(categoryId) {
        const category = categories.find(category => category.id === categoryId);
        return category ? category.products : [];
    }
}

const categoryList = new CategoryList(document.querySelector('#categoriesBlock'));
const appController = new AppController(categoryList);
appController.initialize();