'use strict';

import { Sign } from "./Sign";

import { Cell } from "./Cell";

import { userMove } from "./User";

class GameTable {

    constructor() {
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
                array[`${i}, ${j}`] = cellFactory(`${i}, ${j}`, this);
            }
        }
        this.data = array;
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

export { GameTable };