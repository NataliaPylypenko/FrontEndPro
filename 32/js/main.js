/*
    Створити програму для відображення результатів голосування. З наступними умовами:
    Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
    Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
    При натисканні на смайл - під ним змінюється значення лічильника.
    Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.
 */

class VotingProgram {
    constructor(smiles = ['128512', '128522', '128579', '128526', '129395']) {
        this.smiles = smiles;
        this.render();
        this.listener();
    }

    generateCard(smile, count) {
        const cardBlock = document.createElement('div');
        cardBlock.classList.add('card');

        const span = document.createElement('span');
        span.innerHTML = `&#${smile};`;

        const counter = document.createElement('h3');
        counter.innerHTML = count;

        cardBlock.appendChild(span);
        cardBlock.appendChild(counter);

        return cardBlock;
    }

    generateVoting() {
        const votingBlock = document.createElement('div');
        votingBlock.classList.add('voting');

        this.smiles.forEach(smile => {
            const cardBlock = this.generateCard(smile, 0);
            votingBlock.appendChild(cardBlock);
        });

        return votingBlock;
    }

    listener() {
        const votings = document.querySelectorAll('.voting');
        votings.forEach(voting => voting.addEventListener('click', this.handleClick));
    }

    handleClick(e) {
        if(e.target.nodeName === 'SPAN') {
            e.target.nextSibling.textContent = parseInt(e.target.nextSibling.textContent) + 1;
        }
    }

    render() {
        const root = document.querySelector('#root');
        root.appendChild(this.generateVoting());
    }
}

const voting1 = new VotingProgram();
const voting2 = new VotingProgram(['128569']);