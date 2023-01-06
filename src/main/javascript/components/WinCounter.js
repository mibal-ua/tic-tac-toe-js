const winCounter = counterFabric();

function counterFabric() {
    const score = {
        player: 0,
        computer: 0
    };
    return (message) => {
        if (message.includes('Player')) {
            score.player += 1;
        } else if (message.includes('Computer')) {
            score.computer += 1;
        } else if (message.includes('RESTART')){
            score.computer = 0;
            score.player = 0;
        }
        const counter = document.getElementById("counter");
        counter.innerText = `${score.player}:${score.computer}`
    };
}

export { winCounter };
