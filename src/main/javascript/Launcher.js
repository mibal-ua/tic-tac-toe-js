'use strict';

// init structures
import { GameTable } from "./structures/GameTable.js";

import { Sign } from "./structures/Sign.js";

// init methods
import { makeComputerMove } from "./components/ComputerMove.js"

import { isWin, isDraw } from "./components/WinnerVerifier.js"

import { winCounter } from "./components/WinCounter.js"


// game start
const gameTable = new GameTable(userMove);
gameTable.print();


function userMove(id, gameTable) {

    // continue after user's move
    return () => {

        function gameOver(message) {
            alert(message);
            gameTable.clear();
            winCounter(message);
        }

        if (gameTable.cellIsEmpty(id)) {
            gameTable.setSign(id, Sign.X);
            gameTable.print();
            if (isWin(gameTable, Sign.X)) {
                gameOver('Player win!');
            }
            if (isDraw(gameTable)) {
                gameOver('Draw!');
            }

            makeComputerMove(gameTable, Sign.O);
            gameTable.print();
            if (isWin(gameTable, Sign.O)) {
                gameOver('Computer win!');
            }
            if (isDraw(gameTable)) {
                gameOver('Draw!');
            }
        } else {
            alert(`Cell isn't empty, choose another.`)
        }
    }
}


function userMoveTwoPlayers(id, gameTable) {

    // continue after user's move
    return () => {

        function gameOver(message) {
            alert(message);
            gameTable.clear();
            winCounter(message);
        }

        if (gameTable.cellIsEmpty(id)) {
            const lastSign = gameTable.getLastSign();
            const moveSign = Sign.getOppositeSign(lastSign);
            gameTable.setSign(id, moveSign);
            gameTable.print();
            if (isWin(gameTable, moveSign)) {
                const sign = moveSign.text;
                gameOver(`Player ${sign} win!`);
            }
            if (isDraw(gameTable)) {
                gameOver('Draw!');
            }
            gameTable.setLastSign(moveSign);
        } else {
            alert(`Cell isn't empty, choose another.`)
        }
    }
}
