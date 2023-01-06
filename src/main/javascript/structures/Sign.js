'use strict'

class Sign {
    static X = { text: 'X' };
    static O = { text: '0' };
    static EMPTY = { text: ' ' };

    static getOppositeSign(sign) {
        if (sign === this.X) return this.O;
        if (sign === this.O) return this.X;
        return this.EMPTY;
    }
}

export { Sign };
