'use strict';
import * as ui from './ui.mjs';

window.addEventListener('load', eventListeners);

let petColor;
let oldRed;
let oldGreen;
let oldBlue;

function eventListeners() {
  petColor = document.querySelector('#skinColor');
}

// Flags for certain behaviours to occur
// export let hungry = false;
// export let needClean = false;
// export let needSleep = false; //ASK MATT OR RICH WHY THIS IS STILL WORKING EVEN WHEN COMMENTED OUT!!!!!!!!!!!!!!!

// Incriment Varibles (Per Click)
const foodInc = 15.0;
const sleepInc = 75.0;
const cleanlinessInc = 100.0;

// Decrement Variables (Per Second)
export const foodDec = 0.5;
export const sleepDec = 0.5;
export const cleanlinessDec = 0.25;

export const stats = {
  name: 'default',
  food: 50,
  cleanliness: 50,
  sleep: 50,
  happiness: 50,
  hungry: false,
  needClean: false,
  needSleep: false,
};

export function previewColor() {
  petColor.style.fill = `rgb(${ui.redSlider.value}, ${ui.greenSlider.value}, ${ui.blueSlider.value})`;
}

export function saveColor() {
  // console.log(petColor);
  // console.log("red slider: " + ui.redSlider.value);
  // console.log("green slider: " + ui.greenSlider.value);
  // console.log("blue slider: " + ui.blueSlider.value);
  oldRed = ui.redSlider.value;
  oldGreen = ui.greenSlider.value;
  oldBlue = ui.blueSlider.value;
}

export function revertColor() {
  petColor.style.fill = `rgb(${oldRed},${oldGreen},${oldBlue})`;
  ui.redSlider.value = oldRed;
  ui.greenSlider.value = oldGreen;
  ui.blueSlider.value = oldBlue;
}

export function feedPet() {
  if ((stats.food + foodInc) > 100) {
    stats.food = 100;
    return;
  }
  stats.food += foodInc;
}

export function cleanPet() {
  if ((stats.cleanliness + cleanlinessInc) > 100) {
    stats.cleanliness = 100;
    return;
  }
  stats.cleanliness += cleanlinessInc;
}

export function sleepPet() {
  if ((stats.sleep + sleepInc) > 100) {
    stats.sleep = 100;
    return;
  }
  stats.sleep += sleepInc;
}

export function setName() {
  stats.name = ui.petNameInput.value;
  ui.setPetNameButton.classList = 'hide';
  ui.petNameInput.classList = 'hide';
  ui.hasNameBeenSet = true;
  console.log(ui.hasNameBeenSet);
}
