'use strict';

import { Sign } from './Sign.js';

class Cell {

    sign;

    constructor(html, sign) {
        this.html = html;
        this.setSign(sign);
    }

    setSign(sign) {
        if (sign === Sign.X) {
            this.html.firstChild.src = './resources/cross.png';
        } else if (sign === Sign.O) {
            this.html.firstChild.src = './resources/circle.png';
        } else if (sign !== Sign.EMPTY) {
            throw new Error(`Illegal sign argument '${sign.toString()}'`)
        }
        this.sign = sign;
    }

    getSign() {
        return this.sign;
    }
}

export { Cell };
