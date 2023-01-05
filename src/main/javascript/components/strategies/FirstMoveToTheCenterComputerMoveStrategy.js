'use strict';

class FirstMoveToTheCenterComputerMoveStrategy {

    tryToMakeMove(gameTable, moveSign) {
        const cellId = '1, 1';
        if (gameTable.cellIsEmpty(cellId)) {
            gameTable.setSign(cellId, moveSign);
            return true;
        } else {
            return false;
        }
    }

}

export { FirstMoveToTheCenterComputerMoveStrategy };
