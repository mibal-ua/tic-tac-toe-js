'use strict';

import { AbstractComputerMoveStrategy } from './AbstractComputerMoveStrategy.js'

export class WinOnTheNextStepComputerMoveStrategy extends AbstractComputerMoveStrategy {

    constructor() {
        super(2);
    }

    // Override
    getFindSign(moveSign) {
        return moveSign;
    }
}
