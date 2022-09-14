const toggleColorMode = () => {
  //color mode input
  const inputColorMode = document.getElementById("colormode");

  //default color = #fff (white)
  let theColor = "#fff";

  inputColorMode.addEventListener("input", function () {
    cell.forEach((changeColor) => {
      changeColor.addEventListener("mouseover", (changeColor) => {
        changeColor.target.style.backgroundColor = theColor;
      });
      container.style.border = `5px solid ${theColor}`;
    });

    theColor = inputColorMode.value;
  });

  const colorModeButton = document.querySelector(".color-mode");

  const cell = document.querySelectorAll(".cell");

  const colorMode = () => {
    cell.forEach((changeColor) => {
      changeColor.addEventListener("mouseover", (changeColor) => {
        theColor = inputColorMode.value;
        container.style.border = `5px solid ${inputColorMode.value}`;
        changeColor.target.style.backgroundColor = theColor;
      });
    });
  };

  //color mode button

  colorModeButton.addEventListener("click", function() {
    colorMode();
  });

  //rainbow mode

  const rainbowModeButton = document.querySelector(".rainbow-mode");

  //rainbow color

  const rainbowMode = () => {
    cell.forEach((changeColor) => {
      changeColor.addEventListener("mouseover", (changeColor) => {
        theColor = Math.random() * 360
        changeColor.target.style.backgroundColor = `hsl(${theColor}, 100%, 50%)`;
        container.style.border = `5px solid hsl(${theColor}, 100%, 50%)`;
      });
    });
  };

  //rainbow mode button
  rainbowModeButton.addEventListener("click", function () {
    rainbowMode();
  });

  //eraser

  const eraserModeButton = document.querySelector(".eraser");

  const eraserMode = () => {
    cell.forEach((changeColor) => {
      changeColor.addEventListener("mouseover", (changeColor) => {
        changeColor.target.style.backgroundColor = "#ffffff";
        container.style.border = "5px solid #ffffff";
      });
    });
  };

  eraserModeButton.addEventListener("click", function() {
    eraserMode();
  });

  //clear mode

  const clearModeButton = document.querySelector(".clear");

  const clearMode = () => {
    location.reload();
  };

  clearModeButton.addEventListener("click", function() {
    clearMode()
  });
};
