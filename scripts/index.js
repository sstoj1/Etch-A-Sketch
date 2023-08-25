let defaultMode = "Color Mode";
let sliderDefault = 16;
let defaultColor = "red";

window.onload = document.getElementById("color-picker").value = "red";

function updateGridValue(sliderValue) {
  document.getElementById("slider-value").textContent =
    sliderValue + " x " + sliderValue;

  setGrid(sliderValue);
}

function setGrid(sliderValue) {
  try {
    document.getElementById("sketch-container").replaceChildren();
  } catch (e) {
    console.log("No Elements To Remove");
  }

  for (let row = 0; row < sliderValue; row++) {
    let rowElement = document.createElement("div");
    rowElement.className = "row";

    for (let column = 0; column < sliderValue; column++) {
      let cell = document.createElement("div");
      cell.className = "sketch-cell";
      cell.setAttribute("onclick", "color()");
      rowElement.appendChild(cell);
    }
    document.getElementById("sketch-container").appendChild(rowElement);
  }
}

function resetGrid() {
  try {
    document.getElementById("sketch-container").replaceChildren();
    updateGridValue(sliderDefault);
    document.getElementById("grid-slider").value = sliderDefault;
  } catch (e) {
    console.log("No Elements To Remove");
  }
}

function color() {
  let newBackgroundColor = document
    .getElementById("color-picker")
    .getAttribute("value");
  console.log(newBackgroundColor);
  document
    .getElementById("color-picker")
    .setAttribute("style", "background-color: " + newBackgroundColor);
}
