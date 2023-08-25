let defaultMode = "Color Mode";
let defaultGrid = "16";

function updateGridValue(sliderValue) {
  document.getElementById("slider-value").textContent =
    sliderValue + " x " + sliderValue;

  setGrid(sliderValue);
}

function setGrid(sliderValue) {
  // document.getElementById("sketch-container").innerHTML =
}
