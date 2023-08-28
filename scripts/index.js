let sliderDefaultValue = 16;
let currentColor = "";
let currentMode = "";

/**
 * Updates text of the <p> on top of the slider to the
 * dimensions of the grid.
 *
 * @param {*} sliderValue
 */
function updateGridValue(sliderValue) {
  document.getElementById("slider-value").textContent =
    sliderValue + " x " + sliderValue;

  setGrid(sliderValue);
}

/**
 * Creates a grid of divs based on the value of the slider.
 *
 * @param {*} sliderValue
 */
function setGrid(sliderValue) {
  document.getElementById("sketch-container").replaceChildren();

  for (let row = 0; row < sliderValue; row++) {
    let rowElement = document.createElement("div");
    rowElement.className = "row";

    for (let column = 0; column < sliderValue; column++) {
      let cell = document.createElement("div");
      cell.className = "sketch-cell";
      cell.setAttribute("onmouseover", "color()");
      rowElement.appendChild(cell);
    }
    document.getElementById("sketch-container").appendChild(rowElement);
  }
}

/**
 * Resets the sketch grid to 16x16
 */
function resetGrid() {
  document.getElementById("sketch-container").replaceChildren();
  updateGridValue(sliderDefaultValue);
  document.getElementById("grid-slider").value = sliderDefaultValue;
}

function setCurrentMode(mode) {
  switch (mode) {
    case "color":
      document.getElementById("color-button").style.backgroundColor = "#a86b5b";
      document.getElementById("rainbow-button").style.backgroundColor =
        "#7f97a2";
      document.getElementById("erase-button").style.backgroundColor = "#7f97a2";
      break;
    case "rainbow":
      document.getElementById("rainbow-button").style.backgroundColor =
        "#a86b5b";
      document.getElementById("erase-button").style.backgroundColor = "#7f97a2";
      document.getElementById("color-button").style.backgroundColor = "#7f97a2";
      break;
    case "eraser":
      document.getElementById("erase-button").style.backgroundColor = "#a86b5b";
      document.getElementById("color-button").style.backgroundColor = "#7f97a2";
      document.getElementById("rainbow-button").style.backgroundColor =
        "#7f97a2";
      break;
  }
}
