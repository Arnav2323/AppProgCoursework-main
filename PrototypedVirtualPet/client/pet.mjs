'use strict';
import * as ui from './ui.mjs';
import * as update from './update.mjs';

window.addEventListener('load', eventListeners);

function eventListeners() {

}

// Incriment Varibles (Per Click)
const foodInc = 15.0;
const sleepInc = 50.0;
const cleanlinessInc = 100.0;

// Decrement Variables (Per Second)
export const foodDec = 1.0;
export const sleepDec = 1.0;
export const cleanlinessDec = 2.0;

// setIntervals
let decrementStatsInterval;

let gameStarted = false;

export const stats = {
  name: 'default',
  food: 50,
  cleanliness: 50,
  sleep: 50,
  happiness: 50,
  isAlive: true,
  aliveTime: 0,
  hasCheated: false,
};


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
  decrementStatsInterval = setInterval(update.decrementStats, 1000);// Starts the game. 1 update per second.

  stats.food = 50;// Setting all values once player starts game to prevent cheating.
  stats.sleep = 50;
  stats.cleanliness = 50;

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
  ui.divs.gameOverScreen.classList.remove('hide');
  stats.deathdate = Date.now();
  const minutes = stats.aliveTime / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  ui.labels.finalOutputText.textContent = `Your pet ${stats.name} has died they lived for ${stats.aliveTime} seconds
  ${Math.round(minutes)} Minutes, ${Math.round(hours)} hours, ${Math.round(days)} days.`;
  localStorage.clear();
}

export function saveGame() {
  const saveGame = JSON.stringify(stats);
  localStorage.setItem('stats', saveGame);
  console.log(saveGame);
}

export function loadGame() {
  if (gameStarted === false && localStorage.length > 0) {
    console.log('game loading');
    decrementStatsInterval = setInterval(update.decrementStats, 1000);// Starts the game. 1 update per second.
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

export function restartGame() {
  console.log(decrementStatsInterval);
  console.log('restart game');
  clearInterval(decrementStatsInterval);
  stats.food = 50;
  stats.sleep = 50;
  stats.cleanliness = 50;
  stats.aliveTime = 0;
  ui.buttons.setPetNameButton.classList = '';
  ui.inputs.petNameInput.classList = '';
}
