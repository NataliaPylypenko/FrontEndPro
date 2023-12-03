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
                "price": 599.99,
                "src": 'https://c.dns-shop.ru/thumb/st1/fit/760/600/6f6fcc851d6c7bd2ea61a2a5196c7888/q93_0ca639872faed3929b880c383288085297021c45b5f9812d8ec008220f2c0672.png'
            },
            {
                "id": 102,
                "name": "Ноутбук",
                "price": 1299.99,
                "src": 'https://mobilworld.by/upload/medialibrary/b06/b06727d3f4fe624f0ad0fbbfca73bed0.jpg'
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
                "price": 19.99,
                "src": 'https://intertop.ua/load/SO84/1600x2133/MAIN.jpg'
            },
            {
                "id": 202,
                "name": "Джинси",
                "price": 49.99,
                "src": 'https://images.prom.ua/4360836500_w640_h640_zhenskie-dzhinsy-mom.jpg'
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
                "price": 14.99,
                "src": 'https://upload.wikimedia.org/wikipedia/ru/7/76/Inferno-dan-brown.jpg'
            },
            {
                "id": 302,
                "name": "Наукова книга",
                "price": 24.99,
                "src": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53_6chFQCzJAxP4_xyKWJs4eBUPHk2RVeAg&usqp=CAU'
            }
        ]
    }
];

class CategoryList {
    constructor(element) {
        this.element = element;
    }

    generateCategories(categories) {
        const ul = document.createElement('ul');
        ul.classList.add('list');

        categories.forEach((category, i) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute("href", "#");
            a.setAttribute("data-category-id", `${category.id}`);
            a.innerHTML = category.name;
            li.appendChild(a);
            ul.appendChild(li);
        });

        return ul;
    }

    // 1
    render(categories) {
        this.reset();
        this.element.appendChild(this.generateCategories(categories));
    }

    reset() {
        this.element.innerHTML = '';
    }

    // 2
    onCategorySelect(callback) {
        this.element.addEventListener('click', callback);
    }

    selectFirstItem() {
        this.element.firstChild.firstChild.firstChild.click()
    }
}

class ProductList {
    constructor(element) {
        this.element = element;
    }

    generateProducts(products) {
        const ul = document.createElement('ul');
        ul.classList.add('list');

        products.forEach((product, i) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute("href", "#");
            a.setAttribute("data-product-id", `${product.id}`);
            a.innerHTML = product.name;
            li.appendChild(a);
            ul.appendChild(li);
        });

        return ul;
    }

    // 6
    render(products) {
        this.reset();

        this.element.appendChild(this.generateProducts(products))
    }

    reset() {
        this.element.innerHTML = '';
    }

    // 7
    onProductSelect(callback) {
        this.element.addEventListener('click', callback);
    }
}

class ProductDetails {
    constructor(element) {
        this.element = element;
    }

    generateProduct(product) {
        const div = document.createElement('div');
        div.classList.add('card');

        const child = `
            <div class="card__img">
                <img src="${product.src}" style="width:100%">
            </div>
            <h1>${product.name}</h1>
            <p class="price">${product.price}$</p>
            <p><button class="btn-buy">To Buy</button></p>
        `;

        div.innerHTML = child;

        return div;
    }

    render(product) {
        this.reset();

        this.element.appendChild(this.generateProduct(product))
    }

    reset() {
        this.element.innerHTML = '';
    }

    onBuy(callback) {
        this.element.addEventListener('click', (event) => {
            if (event.target.classList.contains('btn-buy')) {
                callback();
            }
        });
    }
}

class AppController {
    constructor(categories, categoryList, productList, productDetails) {
        this.categoryList = categoryList;
        this.productList = productList;
        this.productDetails = productDetails;
        this.categories = categories;
        this.products = [];
        this.product = [];
    }

    // 1
    initialize() {
        this.categoryList.reset();
        this.productList.reset();
        this.productDetails.reset();

        this.categoryList.render(this.categories);

        // 2
        this.categoryList.onCategorySelect((e) => {
            // 3
            this.handlerClick(e);
            // 4
            const categoryId = parseInt(e.target.getAttribute('data-category-id'));
            // 5
            this.products = this.getProductsByCategory(categoryId);
            // 6
            this.productDetails.reset();
            this.productList.render(this.products);
        });

        this.categoryList.selectFirstItem();

        // 7
        this.productList.onProductSelect((e) => {
            // 8
            this.handlerClick(e);
            // 9
            const productId = parseInt(e.target.getAttribute('data-product-id'));
            // 10
            this.product = this.getProductDetails(productId);
            // 11
            this.productDetails.render(this.product);
        });

        // 12
        this.productDetails.onBuy(() => {
            // 13
            this.purchaseProduct(this.product);

            // 14
            this.productDetails.reset();
            this.categoryList.selectFirstItem()
        })
    }

    unsetActiveItem(item) {
        item.classList.remove('active');
    }

    setActiveItem(item) {
        item.classList.add('active');
    }

    // 3 // 8
    handlerClick = (e) => {
        const currentActiveItem = e.currentTarget.querySelector('.active');
        currentActiveItem && this.unsetActiveItem(currentActiveItem);
        this.setActiveItem(e.target);
    };

    // 5
    getProductsByCategory(categoryId) {
        const category = this.categories.find(category => category.id === categoryId);
        return category ? category.products : [];
    }

    // 10
    getProductDetails(productId) {
        const product = this.products.find(product => product.id === productId);
        return product ? product : {};
    }

    // 13
    purchaseProduct(product) {
        alert(`Товар ${product.name} куплений!`);
    }
}

const categoryList = new CategoryList(document.querySelector('#categoriesBlock'));
const productList = new ProductList(document.querySelector('#productsBlock'));
const productDetails = new ProductDetails(document.querySelector('#productDetailsBlock'));

const appController = new AppController(categories, categoryList, productList, productDetails);
appController.initialize();