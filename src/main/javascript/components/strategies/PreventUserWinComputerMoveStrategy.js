'use strict';

import { Sign } from "../../structures/Sign.js";

import { AbstractComputerMoveStrategy } from './AbstractComputerMoveStrategy.js'

class PreventUserWinComputerMoveStrategy extends AbstractComputerMoveStrategy {

    constructor() {
        super(1);
    }

    // Override
    getFindSign(moveSign) {
        return Sign.getOppositeSign(moveSign);
    }
}

export { PreventUserWinComputerMoveStrategy };
