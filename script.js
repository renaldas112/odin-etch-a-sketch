// prideti spalvu mygtukus

// sukurti funkcija kuri pakeis grid cells spalvas

// pabaigti daryti stiliu

// + mobili versija

const cellColor = document.querySelectorAll("div.change-color");

//color mode input

const inputColorMode = document.getElementById("colormode");

let theColor = 0;

inputColorMode.addEventListener(
  "input",
  function () {
    theColor = inputColorMode.value;
  },
  false
);

cellColor.forEach((changeColor) => {
  changeColor.addEventListener("mouseover", () => (changeColor = theColor.valueOf));
});
