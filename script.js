// prideti spalvu mygtukus

// sukurti funkcija kuri pakeis grid cells spalvas

// pabaigti daryti stiliu

// + mobili versija

const cellColor = document.querySelectorAll("div.change-color");

//color mode input

const inputColorMode = document.getElementById("colormode");

//default color = #ff0000 (red)
let theColor = "#ff0000";

inputColorMode.addEventListener(
  "input",
  function () {
    theColor = inputColorMode.value;
  },
);

cellColor.forEach((changeColor) => {
  changeColor.addEventListener("mouseover", (changeColor) =>  {
    changeColor.target.style.backgroundColor = theColor;
  });
});
