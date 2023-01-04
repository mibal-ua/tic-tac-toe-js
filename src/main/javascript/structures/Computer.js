function makeComputerMove() {
    const strategies = [
        winNowComputerMoveStrategy,
        preventUserWinComputerMoveStrategy,
        winOnTheNextStepComputerMoveStrategy,
        firstMoveToTheCenterComputerMoveStrategy,
        randomComputerMoveStrategy,
    ];

    for (const strategy of strategies) {
        if (strategy()) {
            return;
        }
    }
}

// TODO strategies
function winNowComputerMoveStrategy() {

}

function preventUserWinComputerMoveStrategy() {

}

function winOnTheNextStepComputerMoveStrategy() {

}

function firstMoveToTheCenterComputerMoveStrategy() {

}

function randomComputerMoveStrategy() {

}


export { makeComputerMove };
