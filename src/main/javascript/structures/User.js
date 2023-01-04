'use strict';

import { Sign } from "./Sign.js";

import { makeComputerMove } from "./Computer.js"

import { gameIsOver } from "./WinnerVerifier.js"

const userMove = (id, gameTable) => () => {
    if (gameTable.cellIsEmpty(id)) {
        gameTable.setSign(id, Sign.X);
        gameTable.print();
        if (gameIsOver(gameTable)) {
            alert('Player win!');
            gameTable.clear();
        }

        makeComputerMove(gameTable, Sign.O);
        gameTable.print();
        if (gameIsOver(gameTable)) {
            alert('Computer win!');
            gameTable.clear();
        }
    } else {
        alert(`Cell isn't empty, choose another.`)
    }
}

export { userMove };
