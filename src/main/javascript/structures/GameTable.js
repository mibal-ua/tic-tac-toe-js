'use strict';

import { Sign } from "./Sign.js";

import { Cell } from "./Cell.js";

import { userMove } from "./User.js";

const initializeCells = (gameTable) => {
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
    const array = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            array[`${i}, ${j}`] = cellFactory(`${i}, ${j}`, gameTable);
        }
    }
    return array;
}

class GameTable {

    constructor() {
        this.data = initializeCells(this);
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

    clear() {
        this.data = initializeCells();
        this.print();
    }
}

export { GameTable };
