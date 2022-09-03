// prideti spalvu mygtukus

// sukurti funkcija kuri pakeis grid cells spalvas

// pabaigti daryti stiliu

// + mobili versija

const cellColor = document.querySelectorAll("div.change-color");

//color mode input
const inputColorMode = document.getElementById("colormode");

//default color = #fff (white)
let theColor = "#fff";

inputColorMode.addEventListener("input", function () {
  theColor = inputColorMode.value;
});

const colorMode = document.querySelector(".color-mode");

const toggleColorMode = () => {
  cellColor.forEach((changeColor) => {
    changeColor.addEventListener("mouseover", (changeColor) => {
      changeColor.target.style.backgroundColor = theColor;
    });
  });
};

//color mode button
colorMode.addEventListener("click", toggleColorMode);

//rainbow mode

const rainbowMode = document.querySelector(".rainbow-mode");

//rainbow color

const toggleRainbowMode = () => {
    cellColor.forEach((changeColor) => {
      changeColor.addEventListener("mouseover", (changeColor) => {
        changeColor.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      });
    });
  };

//rainbow mode button
rainbowMode.addEventListener("click", toggleRainbowMode);
