'use strict';

import { Sign } from "./Sign.js";

const userMove = (id, gameTable) => () => {
    if (gameTable.cellIsEmpty(id)) {
        gameTable.setSign(id, Sign.X);
        // TODO winnerVerifier
        // TODO computerMove
        gameTable.print();
    }
}

export { userMove };
