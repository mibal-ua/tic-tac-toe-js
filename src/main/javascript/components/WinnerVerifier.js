const isWinner = (gameTable, sign) => {
    return isWinnerByRows(gameTable, sign) ||
        isWinnerByCols(gameTable, sign) ||
        isWinnerByMainDiagonal(gameTable, sign) ||
        isWinnerBySecondDiagonal(gameTable, sign);
}

function isWinnerByRows(gameTable, sign) {
    for (let i = 0; i < 3; i++) {
        if (gameTable.getSign(`${i}, 0`) === gameTable.getSign(`${i}, 1`) &&
            gameTable.getSign(`${i}, 1`) === gameTable.getSign(`${i}, 2`) &&
            gameTable.getSign(`${i}, 2`) === sign) {
            return true;
        }
    }
    return false;
}

function isWinnerByCols(gameTable, sign) {
    for (let i = 0; i < 3; i++) {
        if (gameTable.getSign(`0, ${i}`) === gameTable.getSign(`1, ${i}`) &&
            gameTable.getSign(`1, ${i}`) === gameTable.getSign(`2, ${i}`) &&
            gameTable.getSign(`2, ${i}`) === sign) {
            return true;
        }
    }
    return false;
}

function isWinnerByMainDiagonal(gameTable, sign) {
    return gameTable.getSign('0, 0') === gameTable.getSign('1, 1') &&
        gameTable.getSign('1, 1') === gameTable.getSign('2, 2') &&
        gameTable.getSign('2, 2') === sign;
}

function isWinnerBySecondDiagonal(gameTable, sign) {
    return gameTable.getSign('2, 0') === gameTable.getSign('1, 1') &&
        gameTable.getSign('1, 1') === gameTable.getSign('0, 2') &&
        gameTable.getSign('0, 2') === sign;
}

function isDraw(gameTable) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (gameTable.cellIsEmpty(`${i}, ${j}`)) {
                return false;
            }
        }
    }
    return true;
}

export { isWinner, isDraw };
