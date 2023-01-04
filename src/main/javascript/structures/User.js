'use strict';

import { Sign } from "./Sign.js";

import { makeComputerMove } from "./Computer.js"

import { isWinner, isDraw } from "./WinnerVerifier.js"

const userMove = (id, gameTable) => () => {

    function gameOver(message) {
        alert(message);
        gameTable.clear();
        return;
    }

    if (gameTable.cellIsEmpty(id)) {
        gameTable.setSign(id, Sign.X);
        gameTable.print();
        if (isWinner(gameTable, Sign.X)) {
            gameOver('Player win!');
        }
        if (isDraw(gameTable)) {
            gameOver('Draw!');
        }

        makeComputerMove(gameTable, Sign.O);
        gameTable.print();
        if (isWinner(gameTable, Sign.O)) {
            gameOver('Computer win!');
        }
        if (isDraw(gameTable)) {
            gameOver('Draw!');
        }
    } else {
        alert(`Cell isn't empty, choose another.`)
    }
}

export { userMove };
