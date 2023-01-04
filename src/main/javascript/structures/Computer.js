function makeComputerMove(gameTable, sign) {
    const strategies = [
        winNowComputerMoveStrategy,
        preventUserWinComputerMoveStrategy,
        winOnTheNextStepComputerMoveStrategy,
        firstMoveToTheCenterComputerMoveStrategy,
        randomComputerMoveStrategy,
    ];

    for (const strategy of strategies) {
        if (strategy(gameTable, sign)) {
            return;
        }
    }
}

// TODO strategies
function winNowComputerMoveStrategy(gameTable, sign) {

}

function preventUserWinComputerMoveStrategy(gameTable, sign) {

}

function winOnTheNextStepComputerMoveStrategy(gameTable, sign) {

}

function firstMoveToTheCenterComputerMoveStrategy(gameTable, sign) {

}

function randomComputerMoveStrategy(gameTable, sign) {
    const random = () => Math.floor(Math.random() * 3);
    while (true) {
        const row = random();
        const col = random();
        const id = `${row}, ${col}`;
        if (gameTable.cellIsEmpty(id)) {
            gameTable.setSign(id, sign);
            return true;
        }
    }
}


export { makeComputerMove };
