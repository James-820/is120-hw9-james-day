// Declare global variables (elements as variables):
// ===========================================================================

let input = document.querySelector("#input");
let tipOutput = document.querySelector("#tip-result");
let totalOutput = document.querySelector("#total-result");
let rad1 = document.querySelector("#rad1");
let rad2 = document.querySelector("#rad2");
let rad3 = document.querySelector("#rad3");
let rad4 = document.querySelector("#rad4");
let custom = document.querySelector("#custom-percent");

// Automatically set 15% as selected by default:
rad1.checked = true;

// Define function(s) for event listeners:
// ===========================================================================

function updateOutputs() {
  let inAmount = parseFloat(input.value);
  let percent;
  let tipResult;
  let totalResult;
  // Determine the checked button:
  if (rad1.checked) {
    percent = 0.15;
  } else if (rad2.checked) {
    percent = 0.2;
  } else if (rad3.checked) {
    percent = 0.25;
  } else {
    // Get custom value:
    // (Early return if there's no value)
    if (custom.value == "") {
      return;
    }
    // Get the percent by dividing by 100:
    if (parseFloat(custom.value) >= 1) {
      percent = parseFloat(custom.value) / 100;
    } else {
      percent = parseFloat(custom.value);
    }
  }
  // Get the tip amount and total amounts:
  tipResult = inAmount * percent;
  totalResult = tipResult + inAmount;
  // If it's NaN, just put "--":
  if (Number.isNaN(tipResult) || Number.isNaN(totalResult)) {
    tipOutput.textContent = "--";
    totalOutput.textContent = "--";
    return;
  }
  // Round to 2 decimal places:
  tipResult = Math.round(tipResult * 100) / 100;
  totalResult = Math.round(totalResult * 100) / 100;
  // Write them to the DOM elements:
  tipOutput.textContent = tipResult;
  totalOutput.textContent = totalResult;
}

// Add event listeners:
// ===========================================================================

input.addEventListener("input", updateOutputs);
rad1.addEventListener("click", updateOutputs);
rad2.addEventListener("click", updateOutputs);
rad3.addEventListener("click", updateOutputs);
rad4.addEventListener("click", updateOutputs);
custom.addEventListener("input", updateOutputs);
