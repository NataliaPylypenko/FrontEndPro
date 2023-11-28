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
    }

    generateVoting() {
        const votingBlock = document.createElement('div');
        votingBlock.classList.add('voting');

        this.smiles.map(smile => {
            const cardBlock = document.createElement('div');
            cardBlock.classList.add('card');

            const span = document.createElement('span');
            span.innerHTML = `&#${smile};`;

            const counter = document.createElement('h3');
            counter.innerHTML = `0`;

            cardBlock.appendChild(span);
            cardBlock.appendChild(counter);
            votingBlock.appendChild(cardBlock);
        });

        return votingBlock;
    }

    render() {
        const root = document.querySelector('#root');
        root.appendChild(this.generateVoting());
    }
}

const voting1 = new VotingProgram();
voting1.render();

// const voting2 = new VotingProgram(['128569']);
// voting2.render();