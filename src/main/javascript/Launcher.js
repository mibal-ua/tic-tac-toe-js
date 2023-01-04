'use strict';


// init structures
import { GameTable } from "./structures/GameTable.js";

import { Sign } from "./structures/Sign.js";

// init methods
import { makeComputerMove } from "./structures/Computer.js"

import { isWinner, isDraw } from "./structures/WinnerVerifier.js"

import { winCounter } from "./structures/WinCounter.js"


// game start
const gameTable = new GameTable(userMove);
gameTable.print();


// continue after user's move
function userMove(id, gameTable) {
    return () => {

        function gameOver(message) {
            alert(message);
            gameTable.clear();
            winCounter(message);
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
}
