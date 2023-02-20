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
  birthdate: Date.now(),
  deathdate: null,
  isAlive: true,
};

export function previewColor() {
  petColor.style.fill = `rgb(${ui.sliders.redSlider.value}, ${ui.sliders.greenSlider.value}, ${ui.sliders.blueSlider.value})`;
}

export function saveColor() {
  // console.log(petColor);
  // console.log("red slider: " + ui.redSlider.value);
  // console.log("green slider: " + ui.greenSlider.value);
  // console.log("blue slider: " + ui.blueSlider.value);
  oldRed = ui.sliders.redSlider.value;
  oldGreen = ui.sliders.greenSlider.value;
  oldBlue = ui.sliders.blueSlider.value;
}

export function revertColor() {
  petColor.style.fill = `rgb(${oldRed},${oldGreen},${oldBlue})`;
  ui.sliders.redSlider.value = oldRed;
  ui.sliders.greenSlider.value = oldGreen;
  ui.sliders.blueSlider.value = oldBlue;
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
  stats.name = ui.inputs.petNameInput.value;
  ui.buttons.setPetNameButton.classList = 'hide';
  ui.inputs.petNameInput.classList = 'hide';
  ui.setName();
}

export function death() {
  stats.isAlive = false;
  stats.deathdate = Date.now();
  const timeAlive = stats.deathdate - stats.birthdate;
  console.log(`Your Pet Lived for ${timeAlive / 1000} seconds`);
}
