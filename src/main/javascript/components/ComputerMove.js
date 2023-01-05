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
    const data = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const index = `${i}, ${j}`;
            if (gameTable.cellIsEmpty(index)) {
                data.push(index);
            }
        }
    }

    const random = (max) => Math.floor(Math.random() * max);
    const randomIndex = random(data.length);
    const id = data[randomIndex];
    gameTable.setSign(id, sign);
}


export { makeComputerMove };
