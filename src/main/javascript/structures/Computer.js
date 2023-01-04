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

}


export { makeComputerMove };
