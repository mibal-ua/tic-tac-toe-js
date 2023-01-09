'use strict';

const winCounter = counterFabric();

function counterFabric() {
    const score = {
        player: 0,
        computer: 0
    };
    updateHoverScoreEffect(score);

    return (message) => {
        if (message.includes('Player')) {
            score.player += 1;
        }
        if (message.includes('Computer')) {
            score.computer += 1;
        }
        if (message.includes('RESTART')) {
            score.computer = 0;
            score.player = 0;
        }
        if (!message.includes('Draw')) {
            throw new Error(`Unsupported counter argument '${message}'`);
        }
        updateHoverScoreEffect(score);
        const counter = document.getElementById("counter");
        counter.innerText = `${score.player}:${score.computer}`
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
        counter.innerText = `${score.player}:${score.computer}`
    }
}

export { winCounter };
