'use strict';

import { GameTable } from "./structures/GameTable";

import { Sign } from "./structures/Sign.js";

const userMove = (id, gameTable) => () => {
    if (gameTable.cellIsEmpty(id)) {
        gameTable.setSign(id, Sign.X);
        // TODO winnerVerifier
        // TODO computerMove
        gameTable.print();
    }
}

// game logic
const gameTable = new GameTable();
gameTable.print();
