'use strict';

class Cell {

    constructor(HTML, sign) {
        this.HTML = HTML;
        this.sign = sign;
    }

    set sign(sign) {
        const text = document.createTextNode(sign.text);
        this.HTML.firstChild.appendChild(text);
    }

}

const Sign = {
    X: {text: 'X'},
    O: {text: '0'},
    EMPTY: {text: ' '},
}

const initializeCells = () => {
    const array = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = cellFactory(`${i}, ${j}`);
            array.push(cell)
        }
    }
    return array;
}

function outAllCells(gameTable) {
    const gameTableDiv = document.getElementById("gameTable");
    for (const cell of gameTable) {
        gameTableDiv.appendChild(cell.cell);
    }
}

const gameTable = createElements();
outAllCells(gameTable);






