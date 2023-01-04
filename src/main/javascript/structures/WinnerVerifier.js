const gameIsOver = (gameTable, sign) => {
    return isWinnerByRows(gameTable, sign) ||
        isWinnerByCols(gameTable, sign) ||
        isWinnerByMainDiagonal(gameTable, sign) ||
        isWinnerBySecondDiagonal(gameTable, sign);
}

function isWinnerByRows(gameTable, sign) {

}

function isWinnerByCols(gameTable, sign) {

}

function isWinnerByMainDiagonal(gameTable, sign) {

}

function isWinnerBySecondDiagonal(gameTable, sign) {

}

export { gameIsOver };
