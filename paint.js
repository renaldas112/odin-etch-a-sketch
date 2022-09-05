//color mode input
const inputColorMode = document.getElementById("colormode");

//default color = #fff (white)
let theColor = "#fff";

inputColorMode.addEventListener("input", function () {
  theColor = inputColorMode.value;
});

const colorModeButton = document.querySelector(".color-mode");

const toggleColorMode = () => {
  const cell = document.querySelectorAll(".cell");

  const colorMode = () => {
    cell.forEach((changeColor) => {
      changeColor.addEventListener("mouseover", (changeColor) => {
        changeColor.target.style.backgroundColor = theColor;
      });
    });
  };
  //color mode button
  colorModeButton.addEventListener("click", colorMode);

  //rainbow mode

  const rainbowModeButton = document.querySelector(".rainbow-mode");

  //rainbow color

  const rainbowMode = () => {
    cell.forEach((changeColor) => {
      changeColor.addEventListener("mouseover", (changeColor) => {
        changeColor.target.style.backgroundColor = `hsl(${
          Math.random() * 360
        }, 100%, 50%)`;
      });
    });
  };

  //rainbow mode button
  rainbowModeButton.addEventListener("click", rainbowMode);

  //eraser

  const eraserModeButton = document.querySelector(".eraser");

  const eraserMode = () => {
    cell.forEach((changeColor) => {
      changeColor.addEventListener("mouseover", (changeColor) => {
        changeColor.target.style.backgroundColor = "#ffffff";
      });
    });
  };

  eraserModeButton.addEventListener("click", eraserMode);

  //clear mode

  const clearModeButton = document.querySelector(".clear");

  const clearMode = () => {
    for (let i = 0; i < cell.length; i++)
      cell[i].style.backgroundColor = "#ffffff";
  };

  clearModeButton.addEventListener("click", clearMode);
};
