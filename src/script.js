'use strict';

function createElements() {
    const array = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = `${i}, ${j}`;
            const textElement = document.createElement('p');
            textElement.className = 'sign';
            const sign = document.createTextNode(' ');
            textElement.appendChild(sign);
            cell.appendChild(textElement);
            array.push({ cell, text: textElement });
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






