'use strict';

import { Cell } from "./structures/Cell.js";

import { Sign } from "./structures/Sign.js";

class GameTable {

    constructor() {
        initializeCells(this);
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

    print() {
        const gameTableDiv = document.getElementById("gameTable");
        gameTableDiv.innerHTML = '';
        const array = this.data;
        for (const key in array) {
            const cell = array[key];
            gameTableDiv.appendChild(cell.html);
        }
    }
}

const userMove = (id, gameTable) => () => {
    if (gameTable.cellIsEmpty(id)) {
        gameTable.setSign(id, Sign.X);
        // TODO winnerVerifier
        // TODO computerMove
        gameTable.print();
    }
}

const initializeCells = (gameTable) => {
    const array = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            array[`${i}, ${j}`] = cellFactory(`${i}, ${j}`, gameTable);
        }
    }
    gameTable.data = array;
}

function cellFactory(id, gameTable) {
    const htmlCell = document.createElement('div');
    htmlCell.className = 'cell';
    htmlCell.id = id;
    const textElement = document.createElement('p');
    textElement.className = 'sign';
    const sign = Sign.EMPTY
    htmlCell.appendChild(textElement);
    htmlCell.onclick = userMove(htmlCell.id, gameTable);
    return new Cell(htmlCell, sign);
}

// game logic
const gameTable = new GameTable();
gameTable.print();
