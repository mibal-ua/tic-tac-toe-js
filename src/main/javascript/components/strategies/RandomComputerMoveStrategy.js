'use strict'

class RandomComputerMoveStrategy {

    tryToMakeMove(gameTable, moveSign) {
        const bestCells = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const index = `${i}, ${j}`;
                if (gameTable.cellIsEmpty(index)) {
                    bestCells.push(index);
                }
            }
        }

        if (bestCells.length > 0){
            const random = (max) => Math.floor(Math.random() * max);
            const randomIndex = random(bestCells.length);
            const id = bestCells[randomIndex];
            gameTable.setSign(id, moveSign);
            return true;
        } else {
            return false;
        }
    }
}

export { RandomComputerMoveStrategy };
