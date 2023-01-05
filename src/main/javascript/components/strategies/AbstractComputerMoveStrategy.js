'use strict'

export class AbstractComputerMoveStrategy {

    constructor(countEmptyCells) {
        this.expectedCountEmptyCells = countEmptyCells;
    }

    tryToMakeMove(gameTable, moveSign) {
        const findSign = this.getFindSign(moveSign);
        const bestCells = [];

        this.findBestCellForMoveByRows(gameTable, findSign, bestCells);
        this.findBestCellForMoveByCols(gameTable, findSign, bestCells);
        this.findBestCellForMoveByMainDiagonal(gameTable, findSign, bestCells);
        this.findBestCellForMoveBySecondaryDiagonal(gameTable, findSign, bestCells);

        if (bestCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * bestCells.length);
            const randomCell = bestCells[randomIndex];
            gameTable.setSign(randomCell, moveSign);
            return true;
        } else {
            return false;
        }
    }

    findBestCellForMoveByRows(gameTable, findSign, bestCells) {
        for (let i = 0; i < 3; i++) {
            this.findBestCellForMoveUsingLambdaConversion(
                gameTable, findSign, bestCells, i, (k, j) => `${k}, ${j}`);
        }
    }

    findBestCellForMoveByCols(gameTable, findSign, bestCells) {
        for (let i = 0; i < 3; i++) {
            this.findBestCellForMoveUsingLambdaConversion(
                gameTable, findSign, bestCells, i, (k, j) => `${j}, ${k}`);
        }
    }

    findBestCellForMoveByMainDiagonal(gameTable, findSign, bestCells) {
        this.findBestCellForMoveUsingLambdaConversion(
            gameTable, findSign, bestCells, -1, (k, j) => `${j}, ${j}`);
    }

    findBestCellForMoveBySecondaryDiagonal(gameTable, findSign, bestCells) {
        this.findBestCellForMoveUsingLambdaConversion(
            gameTable, findSign, bestCells, -1, (k, j) => `${j}, ${2 - j}`);
    }

    findBestCellForMoveUsingLambdaConversion(gameTable, findSign, bestCells, i, lambda) {
        let countEmptyCells = 0;
        let countSignCells = 0;
        const localEmptyCells = [];

        for (let j = 0; j < 3; j++) {
            const cellId = lambda(i, j);
            if (gameTable.cellIsEmpty(cellId)) {
                localEmptyCells.push(cellId);
                countEmptyCells++;
            } else if (gameTable.getSign(cellId) === findSign) {
                countSignCells++;
            } else {
                break;
            }
        }
        if (countEmptyCells === this.expectedCountEmptyCells &&
            countSignCells === 3 - this.expectedCountEmptyCells) {
            for (let j = 0; j < localEmptyCells.length; j++) {
                bestCells.push(localEmptyCells[j]);
            }
        }
    }

    // Abstract method
    getFindSign(moveSign){};

}
