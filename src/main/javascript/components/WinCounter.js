'use strict';

import { Sign } from "../structures/Sign.js";

const winCounter = counterFabric();

function counterFabric() {
    const score = {
        firstPlayer: 0,
        secondPlayer: 0
    };
    updateHoverScoreEffect(score);

    return (message) => {
        if (message.includes('Player')) {
            if(message.includes(Sign.O.text)){
                score.secondPlayer += 1;
            } else {
                score.firstPlayer += 1;
            }
        } else if (message.includes('Computer')) {
            score.secondPlayer += 1;
        } else if (message.includes('RESTART')) {
            score.secondPlayer = 0;
            score.firstPlayer = 0;
        } else if (!message.includes('Draw')) {
            throw new Error(`Unsupported counter argument '${message}'`);
        }
        updateHoverScoreEffect(score);
        const counter = document.getElementById("counter");
        counter.innerText = `${score.firstPlayer}:${score.secondPlayer}`
    };
}

function updateHoverScoreEffect(score) {
    const counter = document.getElementById("counter");
    counter.addEventListener("mouseover", showSigns, false);
    counter.addEventListener("mouseout", showScore(score), false);
}

function showSigns() {
    const counter = document.getElementById("counter");
    counter.innerText = 'X:O';
}

function showScore(score) {
    return () => {
        const counter = document.getElementById("counter");
        counter.innerText = `${score.firstPlayer}:${score.secondPlayer}`
    }
}

export { winCounter };
