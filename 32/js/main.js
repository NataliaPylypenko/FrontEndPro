/*
    Створити програму для відображення результатів голосування. З наступними умовами:
    Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
    Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
    При натисканні на смайл - під ним змінюється значення лічильника.
    Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.
 */

class VotingProgram {
    smiles = {
        5: '128512',
        4: '128522',
        3: '128528',
        2: '128530',
        1: '128544',
    };

    generateSmiles() {
        const smilesArray = Object.values(this.smiles);

        const smilesBlock = document.createElement('div');
        smilesBlock.classList.add('smiles');

        smilesArray.map(smile => {
            const span = document.createElement('span');
            span.innerHTML = `&#${smile};`;
            smilesBlock.appendChild(span);
        });

        return smilesBlock;
    }

    render() {
        const root = document.querySelector('#root');
        root.appendChild(this.generateSmiles());
    }
}

const voting1 = new VotingProgram();
voting1.render();