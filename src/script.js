'use strict';


function addElement() {
    let element = document.createElement('div');
    element.className = 'blackCell';
    const gameTable = document.getElementById("gameTable");
    gameTable.appendChild(element);
    element = document.createElement('div');
    element.className = 'whiteCell';
    gameTable.appendChild(element);
}


// document.body.insertBefore(element, gameTable);



