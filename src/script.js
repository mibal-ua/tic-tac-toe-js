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

    isEmpty(id) {
        const cell = document.getElementById(id);
        return cell.sign === Sign.EMPTY;
    }

    setSign(id, sign) {
        const cell = document.getElementById(id);
        alert(`text changed to ${cell.sign.text}`)
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
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = id;
        const textElement = document.createElement('p');
        textElement.className = 'sign';
        const sign = document.createTextNode(Sign.EMPTY.text);
        textElement.appendChild(sign);
        cell.appendChild(textElement);
        cell.onclick = makeMove(cell.id);
        return new Cell(cell, Sign.EMPTY,);
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = cellFactory(`${i}, ${j}`);
            array.push(cell)
        }
    }
    return array;
}

const makeMove = id => () => {
    alert(`setSign(${id}, ${Sign.X.text})`)
    gameTable.setSign(id, Sign.X);
    outAllCells(gameTable);
}

function outAllCells(gameTable) {
    const gameTableDiv = document.getElementById("gameTable");
    for (const cell of gameTable) {
        gameTableDiv.appendChild(cell.cell);
    }
}

const gameTable = createElements();
outAllCells(gameTable);






