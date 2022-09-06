const container = document.querySelector(".grid-container");

const button4x4 = document.querySelector(".grid-4x4");

const button8x8 = document.querySelector(".grid-8x8");

const button16x16 = document.querySelector(".grid-16x16");

const button32x32 = document.querySelector(".grid-32x32");

const resetButton = document.querySelector(".reset");

const buildGrid = (size) => {
  const gridSize = size * size;

  for (i = 0; i < gridSize; i++) {
    const square = document.createElement("div");
    square.className = "cell";
    container.appendChild(square);
  }
  container.style.gridTemplateRows = `repeat(${size}, 1fr`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr`;
};

// disables buttons after one choice selected

const disableButtonAfterClicked = () => {
  const BUTTONS = document.getElementsByTagName("button");
  for (const BUTTON of BUTTONS) {
    BUTTON.disabled = true;
  }
};

button4x4.onclick = function () {
  buildGrid(4);
  toggleColorMode();
  disableButtonAfterClicked();
};

button8x8.onclick = function () {
  buildGrid(8);
  toggleColorMode();
  disableButtonAfterClicked();
};

button16x16.onclick = function () {
  buildGrid(16);
  toggleColorMode();
  disableButtonAfterClicked();
};

button32x32.onclick = function () {
  buildGrid(32);
  toggleColorMode();
  disableButtonAfterClicked();
};
