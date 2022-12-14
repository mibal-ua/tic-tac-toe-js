'use strict'

class Sign {

    static X = { text: 'X' };

    static O = { text: '0' };

    static EMPTY = { text: ' ' };

    static oppositeSign(sign) {
        if (sign === this.X) return this.O;
        if (sign === this.O) return this.X;
        throw new Error(`Illegal sign: '${sign.toString()}'`);
    }
}

export { Sign };
