'use strict';

import { Sign } from './Sign.js';

import { Cell } from './Cell.js';

class GameTable {

    constructor(onClickEvent) {
        this.onClickEvent = onClickEvent;
        this.data = initializeCells(this, onClickEvent);
        this.lastSign = Sign.O;
    }

    cellIsEmpty(id) {
        const cell = this.data[id];
        if (!cell) throw new Error(`Cell by id: '${id}' does not exists`);
        return cell.sign === Sign.EMPTY;
    }

    setSign(id, sign) {
        const cell = this.data[id];
        if (!cell) throw new Error(`Cell by id: '${id}' does not exists`);
        if (cell.sign === Sign.EMPTY) {
            cell.setSign(sign);
        }
    }

    getSign(id) {
        const cell = this.data[id];
        if (!cell) throw new Error(`Cell by id: '${id}' does not exists`);
        return cell.sign;
    }

    print() {
        const gameTableDiv = document.getElementById('gameTable');
        gameTableDiv.innerHTML = '';
        const array = this.data;
        for (const key in array) {
            const cell = array[key];
            gameTableDiv.appendChild(cell.html);
        }
    }

    clear() {
        this.data = initializeCells(this, this.onClickEvent);
        this.print();
    }

    getLastSign() {
        return this.lastSign;
    }

    setLastSign(sign) {
        this.lastSign = sign;
    }
}

function initializeCells(gameTable, onClickEvent) {

    function cellFactory(id, gameTable) {
        const htmlCell = document.createElement('div');
        htmlCell.className = 'cell';
        htmlCell.id = id;
        const textElement = document.createElement('p');
        textElement.className = 'sign';
        const sign = Sign.EMPTY
        htmlCell.appendChild(textElement);
        htmlCell.onclick = onClickEvent(htmlCell.id, gameTable);
        return new Cell(htmlCell, sign);
    }

    const array = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const id = `${i}, ${j}`;
            array[id] = cellFactory(id, gameTable);
        }
    }
    return array;
}

export { GameTable };
