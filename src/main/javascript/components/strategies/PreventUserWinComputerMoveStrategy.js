import { Sign } from "../../structures/Sign.js";

import { AbstractComputerMoveStrategy } from './AbstractComputerMoveStrategy.js'

class PreventUserWinComputerMoveStrategy extends AbstractComputerMoveStrategy {

    constructor() {
        super(1);
    }

    // Override
    getFindSign(moveSign) {
        if (moveSign === Sign.O) return Sign.X;
        if (moveSign === Sign.X) return Sign.O;
    }
}

export { PreventUserWinComputerMoveStrategy };
