const winCounter = counterFabric();

function counterFabric() {
    const score = {
        player: 0,
        computer: 0
    };
    addHoverScoreEffect(score);
    return (message) => {
        if (message.includes('Player')) {
            score.player += 1;
        } else if (message.includes('Computer')) {
            score.computer += 1;
        } else if (message.includes('RESTART')) {
            score.computer = 0;
            score.player = 0;
        }
        addHoverScoreEffect(score);
        const counter = document.getElementById("counter");
        counter.innerText = `${score.player}:${score.computer}`
    };
}

function addHoverScoreEffect(score) {
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
