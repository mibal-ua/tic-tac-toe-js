'use strict';

import { WinNowComputerMoveStrategy } from './strategies/WinNowComputerMoveStrategy.js'

import { PreventUserWinComputerMoveStrategy } from './strategies/PreventUserWinComputerMoveStrategy.js'

import { WinOnTheNextStepComputerMoveStrategy } from './strategies/WinOnTheNextStepComputerMoveStrategy.js'

import { FirstMoveToTheCenterComputerMoveStrategy } from './strategies/FirstMoveToTheCenterComputerMoveStrategy.js'

import { RandomComputerMoveStrategy } from './strategies/RandomComputerMoveStrategy.js';


function makeComputerMove(gameTable, sign) {
    const winNowComputerMoveStrategy = new WinNowComputerMoveStrategy();
    const preventUserWinComputerMoveStrategy = new PreventUserWinComputerMoveStrategy();
    const winOnTheNextStepComputerMoveStrategy = new WinOnTheNextStepComputerMoveStrategy();
    const firstMoveToTheCenterComputerMoveStrategy = new FirstMoveToTheCenterComputerMoveStrategy();
    const randomComputerMoveStrategy =  new RandomComputerMoveStrategy();

    const strategies = [
        winNowComputerMoveStrategy,
        preventUserWinComputerMoveStrategy,
        winOnTheNextStepComputerMoveStrategy,
        firstMoveToTheCenterComputerMoveStrategy,
        randomComputerMoveStrategy,
    ];

    for (const strategy of strategies) {
        if (strategy.tryToMakeMove(gameTable, sign)) {
            return;
        }
    }
    throw new Error('Computer can\'t make a move');
}

export { makeComputerMove };
