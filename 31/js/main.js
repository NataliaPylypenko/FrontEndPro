/*
    На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням). Реалізувати
    перевірку на http/https. Якщо протокол не вказаний - додаємо
 */

class RedirectButton {
    constructor(text, link) {
        this.text = text;
        this.link = this.addProtocol(link);
    }

    addProtocol(link) {
        return link.substring(0, 4) === 'http' ? link : `http://${link}`;
    }

    generateButton() {
        // return `<a href="${this.link}" class="button">${this.text}</a>`;
        const button = document.createElement('a');
        button.href = this.link;
        button.classList.add('button');
        button.textContent = this.text;
        return button;
    }

    render() {
        const root = document.querySelector('#root');
        const button = this.generateButton();
        root.appendChild(button);
    }
}

const button1 = new RedirectButton('DOU', 'https://dou.ua/calendar/');
button1.render();

const button2 = new RedirectButton('DOU', 'dou.ua/calendar/');
button2.render();