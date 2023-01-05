const isWin = (gameTable, sign) => {
    return isWinByRows(gameTable, sign) ||
        isWinByCols(gameTable, sign) ||
        isWinByMainDiagonal(gameTable, sign) ||
        isWinBySecondDiagonal(gameTable, sign);
}

function isWinByRows(gameTable, sign) {
    for (let i = 0; i < 3; i++) {
        if (gameTable.getSign(`${i}, 0`) === gameTable.getSign(`${i}, 1`) &&
            gameTable.getSign(`${i}, 1`) === gameTable.getSign(`${i}, 2`) &&
            gameTable.getSign(`${i}, 2`) === sign) {
            return true;
        }
    }
    return false;
}

function isWinByCols(gameTable, sign) {
    for (let i = 0; i < 3; i++) {
        if (gameTable.getSign(`0, ${i}`) === gameTable.getSign(`1, ${i}`) &&
            gameTable.getSign(`1, ${i}`) === gameTable.getSign(`2, ${i}`) &&
            gameTable.getSign(`2, ${i}`) === sign) {
            return true;
        }
    }
    return false;
}

function isWinByMainDiagonal(gameTable, sign) {
    return gameTable.getSign('0, 0') === gameTable.getSign('1, 1') &&
        gameTable.getSign('1, 1') === gameTable.getSign('2, 2') &&
        gameTable.getSign('2, 2') === sign;
}

function isWinBySecondDiagonal(gameTable, sign) {
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

export { isWin, isDraw };
