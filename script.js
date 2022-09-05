const container = document.querySelector(".grid-container");

const button4x4 = document.querySelector(".grid-4x4");

let buildGrid = (row, column) => {
  const buildRow = (row) => {
    for (i = 0; i < row; i++) {
      const gridRow = document.createElement("div");
      gridRow.className = "cell";
      container.appendChild(gridRow);

      const rowSize = "1fr ";

      container.style.gridTemplateRows = rowSize.repeat(row);
    }
  };

  const buildColumn = (column) => {
    for (i = 0; i < column; i++) {
      const gridColumn = document.createElement("div");
      gridColumn.className = "cell";
      container.appendChild(gridColumn);

      const columnSize = "1fr ";

      container.style.gridTemplateColumns = columnSize.repeat(column);
    }
  };

  buildRow(row);
  buildColumn(column);

};

button4x4.onclick = function () {
    buildGrid(4, 4);
};
