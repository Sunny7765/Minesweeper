const gameBox = document.getElementsByClassName("gameBox");
let rows = document.getElementsByClassName("gridColumn");
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
        gameBox[0].appendChild(row).className = "gridColumn";
    }
}

function makeColumns(cellNum) {
    for (j = 0; j < rows.length; j++) {
        for (k = 0; k < cellNum; k++) {
            let newCell = document.createElement("div");
            newCell.addEventListener("click", function() {
                newCell.style.backgroundColor = "black";
            })
            rows[k].appendChild(newCell).className = "cell";
        }
    }
}

function makeMines(numMines) {
    for (m = 0; m < numMines; m++) {
        let randCell = cells[Math.floor(Math.random() * cells.length)];
        randCell.textContent = "*";
    }
}

defaultGrid();
makeMines(80)