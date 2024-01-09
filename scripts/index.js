const sliderDefaultValue = 16;
const colorDefault = "000000";
const modeDefault = "color";
var currentColor = "";
var currentMode = "";

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
 * Resets the sketch grid to 16x16 and default color settings.
 */
function resetGrid() {
  document.getElementById("sketch-container").replaceChildren();
  updateGridValue(sliderDefaultValue);
  document.getElementById("grid-slider").value = sliderDefaultValue;
  currentColor = colorDefault;
  setCurrentMode(modeDefault);

  // THIS LINE WORKS
  document.querySelector("#color-picker").value = "#000000";

  document
    .querySelector("#color-picker")
    .addEventListener("input", updateFirst, false);
  document
    .querySelector("#color-picker")
    .addEventListener("change", updateAll, false);
}

function updateFirst(event) {
  if (document.querySelector("div")) {
    document.querySelector("div").style.color = event.target.value;
  }
}

function updateAll(event) {
  document.querySelector("div").forEach((div) => {
    div.style.color = event.target.value;
  });
}

/**
 * Switches the color mode to what the user chooses.
 *
 * @param {} mode
 */
function setCurrentMode(mode) {
  switch (mode) {
    case "color":
      document.getElementById("color-button").style.backgroundColor = "#a86b5b";
      document.getElementById("rainbow-button").style.backgroundColor =
        "#7f97a2";
      document.getElementById("erase-button").style.backgroundColor = "#7f97a2";
      currentMode = "color";
      break;
    case "rainbow":
      document.getElementById("rainbow-button").style.backgroundColor =
        "#a86b5b";
      document.getElementById("erase-button").style.backgroundColor = "#7f97a2";
      document.getElementById("color-button").style.backgroundColor = "#7f97a2";
      currentMode = "rainbow";
      break;
    case "eraser":
      document.getElementById("erase-button").style.backgroundColor = "#a86b5b";
      document.getElementById("color-button").style.backgroundColor = "#7f97a2";
      document.getElementById("rainbow-button").style.backgroundColor =
        "#7f97a2";
      currentMode = "eraser";
      currentColor = "#f5f5f3";
      console.log(currentColor);
      break;
  }
}

/**
 * Sets the current value to that of the color input if the mode is on "color".
 *
 * @param {*} pickerValue
 */
function setColor(pickerValue) {
  if (currentMode === "color") {
    currentColor = pickerValue;
    console.log(currentColor);
  }
}

function watchColorPicker(event) {
  document.querySelector("div").forEach((div) => {
    div.style.color = event.target.value;
  });
}

//wip
function color() {
  document.getElementsByClassName("sketch-cell").target.style.backgroundColor =
    currentColor;
}
