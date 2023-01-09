'use strict'

class Sign {

    static X = { text: 'X' };

    static O = { text: '0' };

    static EMPTY = { text: ' ' };

    static oppositeSign(sign) {
        if (sign === this.X) return this.O;
        if (sign === this.O) return this.X;
        if (sign === this.EMPTY)return this.EMPTY;
        throw new Error(`Illegal sign: '${sign.toString()}'`);
    }
}

export { Sign };
