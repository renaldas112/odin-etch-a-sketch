//Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("grid__container--grid-row");
let cells = document.getElementsByClassName("grid__container--grid-cell");

defaultGrid();
//Creates a default grid sized 16x16
function defaultGrid() {
  makeRows(16);
  makeColumns(16);
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {
  //Creates rows
  for (r = 0; r < rowNum; r++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "grid__container--grid-row";
  }
}

//Creates columns
function makeColumns(cellNum) {
  for (i = 0; i < rows.length; i++) {
    for (j = 0; j < cellNum; j++) {
      let newCell = document.createElement("div");
      rows[j].appendChild(newCell).className = "grid__container--grid-cell";
    }
  }
}
