'use strict';

import { Sign } from "./Sign.js";

import { makeComputerMove } from "./Computer.js"

import { WinnerVerifier } from "./WinnerVerifier.js"

const userMove = (id, gameTable) => () => {
    const winnerVerifier = new WinnerVerifier();
    if (gameTable.cellIsEmpty(id)) {
        gameTable.setSign(id, Sign.X);
        gameTable.print();
        if (winnerVerifier.gameIsOver(gameTable)) {
            // TODO Player Win
        }

        makeComputerMove(gameTable, Sign.O);
        gameTable.print();
        if (winnerVerifier.gameIsOver(gameTable)) {
            // TODO Computer win
        }
    } else {
        alert(`Cell isn't empty, choose another.`)
    }
}

export { userMove };
