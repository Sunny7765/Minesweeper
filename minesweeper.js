const gameBox = document.getElementsByClassName("gameBox");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

console.log(gameBox);
console.log(rows);
console.log(cells);


function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

function makeRows(rowNum) {
    for (i = 0; i < rowNum; i++) {
        let row = document.createElement("div");
        gameBox[0].appendChild(row).className = "gridRow";
    };
};

function makeColumns(cellNum) {
    for (j = 0; j < rows.length; j++) {
        for (k = 0; k < cellNum; k++) {
            let newCell = document.createElement("div");
            rows[k].appendChild(newCell).className = "cell";
        };
    };
};

defaultGrid();