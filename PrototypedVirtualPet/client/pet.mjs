'use strict';
import * as ui from './ui.mjs';

window.addEventListener('load', eventListeners);

let petColor;

function eventListeners() {
  petColor = document.querySelector('#skinColor');
}

// Flags for certain behaviours to occur
// export let hungry = false;
// export let needClean = false;
// export let needSleep = false; //ASK MATT OR RICH WHY THIS IS STILL WORKING EVEN WHEN COMMENTED OUT!!!!!!!!!!!!!!!

// Incriment Varibles (Per Click)
const foodInc = 15.0;
const sleepInc = 50.0;
const cleanlinessInc = 100.0;

// Decrement Variables (Per Second)
export const foodDec = 1.5;
export const sleepDec = 1.5;
export const cleanlinessDec = 3.0;

export const stats = {
  name: 'default',
  food: 50,
  cleanliness: 50,
  sleep: 50,
  happiness: 50,
  birthdate: Date.now(),
  deathdate: null,
  isAlive: true,
  red: 255,
  green: 0,
  blue: 0,
};

export function previewColor() {
  petColor.style.fill = `rgb(${ui.sliders.redSlider.value}, ${ui.sliders.greenSlider.value}, ${ui.sliders.blueSlider.value})`;
}

export function saveColor() {
  stats.red = ui.sliders.redSlider.value;
  stats.green = ui.sliders.greenSlider.value;
  stats.blue = ui.sliders.blueSlider.value;
}

export function revertColor() {
  petColor.style.fill = `rgb(${stats.red},${stats.green},${stats.blue})`;
  ui.sliders.redSlider.value = stats.red;
  ui.sliders.greenSlider.value = stats.green;
  ui.sliders.blueSlider.value = stats.blue;
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

export function loadName() {
  ui.buttons.setPetNameButton.classList = 'hide';
  ui.inputs.petNameInput.classList = 'hide';
  ui.setName();
}

export function death() {
  stats.isAlive = false;
  stats.deathdate = Date.now();
  const timeAlive = stats.deathdate - stats.birthdate;
  alert(`Your pet ${stats.name} has died they lived for ${timeAlive / 1000} seconds
  :(.`);
  localStorage.clear();
}

export function saveGame() {
  const saveGame = JSON.stringify(stats);
  localStorage.setItem('stats', saveGame);
  console.log(localStorage);
}

export function loadGame() {
  const gameSave = localStorage.getItem('stats');
  const load = JSON.parse(gameSave);
  stats.name = load.name;
  stats.food = load.food;
  stats.sleep = load.sleep;
  stats.cleanliness = load.cleanliness;
  stats.happiness = load.happiness;
  stats.birthdate = load.birthdate;
  stats.red = load.red;
  stats.green = load.green;
  stats.blue = load.blue;
  // sets everything from the save to as it was before the save to restore the game state
  loadName();
  revertColor();
}
