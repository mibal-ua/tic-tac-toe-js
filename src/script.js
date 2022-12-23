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

class GameTable {

    constructor() {
        this.data = initializeCells();
    }

    cellIsEmpty(id) {
        const cell = this.data[id];
        return cell.sign === Sign.EMPTY;
    }

    setSign(id, sign) {
        const cell = this.data[id];
        if (cell.sign === Sign.EMPTY) {
            cell.sign = sign;
        }
    }

}

const Sign = {
    X: {text: 'X'},
    O: {text: '0'},
    EMPTY: {text: ' '},
}

const initializeCells = () => {
    const array = [];

    function cellFactory(id) {
        const htmlCell = document.createElement('div');
        htmlCell.className = 'cell';
        htmlCell.id = id;
        const textElement = document.createElement('p');
        textElement.className = 'sign';
        const sign = Sign.EMPTY
        // const node = document.createTextNode(sign.text);
        // textElement.appendChild(node);
        htmlCell.appendChild(textElement);
        htmlCell.onclick = makeMove(htmlCell.id);
        return new Cell(htmlCell, sign);
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            array[`${i}, ${j}`] = cellFactory(`${i}, ${j}`);
        }
    }
    return array;
}

const makeMove = id => () => {
    if (gameTable.cellIsEmpty(id)) {
        gameTable.setSign(id, Sign.X);
    }
    printGameTable(gameTable);
}

function printGameTable(gameTable) {
    const gameTableDiv = document.getElementById("gameTable");
    gameTableDiv.innerHTML = '';
    for (const cell of gameTable.data) {
        gameTableDiv.appendChild(cell.HTML);
    }
}

const gameTable = new GameTable();
printGameTable(gameTable);



