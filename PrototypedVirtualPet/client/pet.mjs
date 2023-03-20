'use strict';
import * as ui from './ui.mjs';
import * as update from './update.mjs';

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
export const foodDec = 0.5;
export const sleepDec = 0.5;
export const cleanlinessDec = 1.0;

let gameStarted = false;

export const stats = {
  name: 'default',
  food: 50,
  cleanliness: 50,
  sleep: 50,
  happiness: 50,
  birthdate: Date.now(),
  deathdate: null,
  isAlive: true,
  aliveTime: 0,
};

let sessionStartTime = Date.now();
let sessionTempTime = 0;

export function previewColor() {
  petColor.style.fill = `rgb(${ui.sliders.redSlider.value}, ${ui.sliders.greenSlider.value}, ${ui.sliders.blueSlider.value})`;
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
  sessionStartTime = Date.now(); // Resets timers so players can cheat and idle extra time without playing
  sessionTempTime = 0;
  setInterval(update.decrementStats, 1000);// Starts the game. 1 update per second.

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
  stats.aliveTime += timeAliveCalc();
  sessionStartTime = Date.now();
  const saveGame = JSON.stringify(stats);
  localStorage.setItem('stats', saveGame);
  console.log(saveGame);
}

export function loadGame() {
  if (gameStarted === false && localStorage.length > 0) {
    console.log('game loading');
    sessionStartTime = Date.now(); // Resets timers so players can cheat and idle extra time without playing
    sessionTempTime = 0;
    setInterval(update.decrementStats, 1000);// Starts the game. 1 update per second.

    const gameSave = localStorage.getItem('stats');
    const load = JSON.parse(gameSave);
    stats.name = load.name;
    stats.food = load.food;
    stats.sleep = load.sleep;
    stats.cleanliness = load.cleanliness;
    stats.happiness = load.happiness;
    stats.birthdate = load.birthdate;
    stats.aliveTime = load.aliveTime;
    // sets everything from the save to as it was before the save to restore the game state
    loadName();
    gameStarted = true;
  }
  console.log('game loaded');
}

export function timeAliveCalc() {
  sessionTempTime = (Date.now() - sessionStartTime) / 1000;
  return sessionTempTime;
}
