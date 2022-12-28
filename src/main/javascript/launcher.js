'use strict';

import { Cell } from "./structures/Cell.js";

import { Sign } from "./structures/Sign.js";

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
            cell.setSign(sign);
        }
    }
}

const userMove = (id) => () => {
    if (gameTable.cellIsEmpty(id)) {
        gameTable.setSign(id, Sign.X);
        // TODO winnerVerifier
        // TODO computerMove
        printGameTable(gameTable);
    }
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
        htmlCell.appendChild(textElement);
        htmlCell.onclick = userMove(htmlCell.id);
        return new Cell(htmlCell, sign);
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            array[`${i}, ${j}`] = cellFactory(`${i}, ${j}`);
        }
    }
    return array;
}

function printGameTable(gameTable) {
    const gameTableDiv = document.getElementById("gameTable");
    gameTableDiv.innerHTML = '';
    const array = gameTable.data;
    for (const key in array) {
        const cell = array[key];
        gameTableDiv.appendChild(cell.html);
    }
}

// game logic
const gameTable = new GameTable();
printGameTable(gameTable);
