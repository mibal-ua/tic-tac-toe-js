'use strict';

class Cell {

    sign;

    constructor(html, sign) {
        this.html = html;
        this.setSign(sign);
    }

    setSign(sign) {
        const text = document.createTextNode(sign.text);
        this.html.firstChild.appendChild(text);
        this.sign = sign;
    }

    getSign() {
        return this.sign;
    }
}

export { Cell };
