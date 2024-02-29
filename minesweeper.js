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
                if (newCell.textContent === "*") {
                    newCell.style.backgroundColor = "red";
                }
                else newCell.style.backgroundColor = "lime";
            })
            rows[k].appendChild(newCell).className = "cell";
        }
    }
}

function makeMines(numMines) {
    for (m = 0; m < numMines; m++) {
        let randCell = cells[Math.floor(Math.random() * cells.length)];
        if (randCell.textContent === "*") m--;
        else randCell.textContent = "*";
    }
}

function cellNum() {
    for (k = 0; k < cells.length; k++) {
        if (!(cells[k].textContent === "*")) scanMines(k);
    } 
}

function scanMines(n) {
    let valuesToCheck = [[n - 17, n - 1, n + 15],
                         [n - 16, n, n + 16],
                         [n - 15, n + 1, n + 17]];
    
    console.log(valuesToCheck);
    if (n % 16 == 0) {
        for (i = 0; i < valuesToCheck[0].length; i++) {
            valuesToCheck[0][i] = -1;
        }
    };
    if (n % 16 == 15) {
        for (i = 0; i < valuesToCheck[2].length; i++) {
            valuesToCheck[2][i] = -1;
        }
    }
    if (n < 16) {
        for (i = 0; i < valuesToCheck.length; i++) {
            valuesToCheck[i][0] = -1;
        }
    }
    if (n > 239) {
        for (i = 0; i < valuesToCheck.length; i++) {
            valuesToCheck[i][2] = -1;
        }
    }
    let totalMinesDetected = 0;
    for (i = 0; i < valuesToCheck.length; i++) {
        for (j = 0; j < valuesToCheck[i].length; j++) {
            totalMinesDetected += neighbor(n, valuesToCheck[i][j]);
        }
    }

    cells[n].textContent = totalMinesDetected;
}

function neighbor(currentIndex, searchIndex) {
    console.log(searchIndex);
    if (currentIndex == searchIndex) return 0;
    if (searchIndex < 0) return 0;
    if (cells[searchIndex].textContent === "*") {
        return 1;
    }
    return 0; 
        
    
}

defaultGrid();
makeMines(80);
cellNum();
