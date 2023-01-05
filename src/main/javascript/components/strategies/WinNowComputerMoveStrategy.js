'use strict';

import { AbstractComputerMoveStrategy } from './AbstractComputerMoveStrategy.js'

export class WinNowComputerMoveStrategy extends AbstractComputerMoveStrategy{

    constructor() {
        super(1);
    }

    // Override
    getFindSign(moveSign) {
        return moveSign;
    }
}
