'use strict';

import * as pet from './pet.mjs';
import * as update from './update.mjs';

// Waits for window to load before adding event listeners
window.addEventListener('load', eventListeners);

export const buttons = {
  feedButton: null,
  cleanButton: null,
  sleepButton: null,
  setPetNameButton: null,
  saveColor: null,
  revertColor: null,
  saveGameButton: null,
  loadGameButton: null,
  consoleSendButton: null,
  consoleButton: null,
  restartGameButton: null,
};

export const labels = {
  feedPetTxt: null,
  sleepPetTxt: null,
  cleanPetTxt: null,
  happinessTxt: null,
  petNameTxt: null,
  timeAliveTxt: null,
  finalOutputText: null,
  consoleLogs: null,
};

export const meters = {
  happyMeter: null,
  foodMeter: null,
  sleepMeter: null,
  cleanMeter: null,
};

export const inputs = {
  petNameInput: null,
  consoleInput: null,
};

export const divs = {
  gameOverScreen: null,
  consolePanel: null,
};

const animSelector = {
  happyAnim: 0,
  sadAnim: 1,
};

const canvas = document.getElementById('canvasWindow');
const ctx = canvas.getContext('2d');

const spriteSheet = new Image();
spriteSheet.src = 'Assets/catanim128.png';

let animTick = 0;

let consolePanelHidden = true;


// gets all the buttonns and text I want to read/write
// adds event listeners to buttons that call
// specfic functions when a certain button is pressed
function eventListeners() {
  buttons.feedButton = document.querySelector('#feedButton');
  buttons.cleanButton = document.querySelector('#cleanButton');
  buttons.sleepButton = document.querySelector('#sleepButton');
  labels.feedPetTxt = document.querySelector('#foodText');
  labels.sleepPetTxt = document.querySelector('#sleepText');
  labels.cleanPetTxt = document.querySelector('#cleanText');
  labels.timeAliveTxt = document.querySelector('#timeAliveTxt');
  buttons.saveColor = document.querySelector('#saveColor');
  buttons.revertColor = document.querySelector('#revertColor');
  labels.happinessTxt = document.querySelector('#happyText');
  meters.happyMeter = document.querySelector('#happyMeter');
  meters.foodMeter = document.querySelector('#foodMeter');
  meters.sleepMeter = document.querySelector('#sleepMeter');
  meters.cleanMeter = document.querySelector('#cleanMeter');
  inputs.petNameInput = document.querySelector('#petName');
  buttons.setPetNameButton = document.querySelector('#nameButton');
  labels.petNameTxt = document.querySelector('#petNameTxt');
  buttons.saveGameButton = document.querySelector('#saveGameButton');
  buttons.loadGameButton = document.querySelector('#loadGameButton');
  labels.finalOutputText = document.querySelector('#finalOutputText');
  divs.gameOverScreen = document.querySelector('#gameOverPanel');
  divs.gameOverScreen.classList.add('hide');
  inputs.consoleInput = document.querySelector('#console');
  labels.consoleLogs = document.querySelector('#consoleLogs');
  buttons.consoleSendButton = document.querySelector('#consoleSendButton');
  buttons.consoleButton = document.querySelector('#consoleButton');
  divs.consolePanel = document.querySelector('#consolePanel');
  divs.consolePanel.classList.add('hide');
  buttons.restartGameButton = document.querySelector('#restartGameButton');

  buttons.feedButton.addEventListener('click', pet.feedPet);
  buttons.cleanButton.addEventListener('click', pet.cleanPet);
  buttons.sleepButton.addEventListener('click', pet.sleepPet);
  buttons.setPetNameButton.addEventListener('click', pet.setName);
  buttons.saveGameButton.addEventListener('click', pet.saveGame);
  buttons.loadGameButton.addEventListener('click', pet.loadGame);
  buttons.consoleSendButton.addEventListener('click', sendConsoleCommand);
  buttons.consoleButton.addEventListener('click', consolePanelToggle);
  buttons.restartGameButton.addEventListener('click', pet.restartGame);

  inputs.consoleInput.addEventListener('keypress', (e) => { // If pressing enter in CMD it auto sends command.
    if (e.code === 'Enter') {
      sendConsoleCommand();
    }
  });

  inputs.petNameInput.addEventListener('keypress', (e) => { //  If pressing enter it auto sends input.
    if (e.code === 'Enter') {
      pet.setName();
    }
  });
}

export function ui() {
  labels.feedPetTxt.textContent = `Food Stat: ${Math.round(pet.stats.food)}`; // Rounding of numbers if for formatting.
  labels.timeAliveTxt.textContent = `Time Alive: ${Math.round(pet.stats.aliveTime)} Seconds`;
  labels.cleanPetTxt.textContent = `Cleanliness Stat: ${Math.round(pet.stats.cleanliness)}`;
  labels.sleepPetTxt.textContent = `Sleep Stat: ${Math.round(pet.stats.sleep)}`;
  labels.happinessTxt.textContent = `Happiness Stat: ${Math.round(pet.stats.happiness)}`;

  if (pet.stats.happiness >= 50) {
    animationHandler(spriteSheet, animTick, 0, 20, 24, animSelector.happyAnim);
  } else {
    animationHandler(spriteSheet, animTick, 0, 20, 24, animSelector.sadAnim);
  }

  // Meters Updating Below
  meters.foodMeter.value = pet.stats.food;
  meters.cleanMeter.value = pet.stats.cleanliness;
  meters.sleepMeter.value = pet.stats.sleep;
  meters.happyMeter.value = pet.stats.happiness;

  animTick += 1;

  if (animTick > 30) {
    animTick = 0;
  }
}

export function setName() {
  labels.petNameTxt.textContent = `Pet Name: ${pet.stats.name}`;
}

function drawPet(spriteSheet, sx, sy) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.drawImage(spriteSheet, sx, sy, 128, 128, 150, 200, spriteSheet.width, spriteSheet.height);
}

function animationHandler(spriteSheet, animTick, anim1, anim2, anim3, animSelector) {
  const positionSx = [32, 160, 288];
  const positionSy = [0, 128];
  switch (animTick) {
    case anim1:
      drawPet(spriteSheet, positionSx[0], positionSy[animSelector]);
      break;

    case anim2:
      drawPet(spriteSheet, positionSx[1], positionSy[animSelector]);
      break;

    case anim3:
      drawPet(spriteSheet, positionSx[2], positionSy[animSelector]);
      break;
  }
}

function consolePanelToggle() {
  if (consolePanelHidden === true) {
    divs.consolePanel.classList.remove('hide');
    buttons.consoleButton.textContent = 'Close Console';
    consolePanelHidden = false;
    return;
  }
  buttons.consoleButton.textContent = 'Open Console';
  divs.consolePanel.classList.add('hide');
  consolePanelHidden = true;
}

function sendConsoleCommand() {
  pet.stats.hasCheated = true;
  const input = inputs.consoleInput.value;

  if (input.includes('timescale')) { // function handles the timescale command.
    const cmd = input.split(' ');
    const num = parseFloat(cmd[1]);
    if (Number.isNaN(num)) {
      labels.consoleLogs.textContent = `Error ${cmd[1]} isn't a number. Please enter a number.`;
      return;
    }
    labels.consoleLogs.textContent = `timescale ${cmd[1]}`;
    update.timeScaleAdjust(cmd[1]);
    inputs.consoleInput.value = '';
    return;
  }

  switch (inputs.consoleInput.value) {
    case 'help':
      labels.consoleLogs.textContent = `
      Command name "kill" -> This command kills the pet.

      Command name "timescale x" -> This command changes the speed of the game. Replace x with the number
      you want to multiply the games speed by.

      Command name "god" -> This command sets all attributes to 99999`;
      inputs.consoleInput.value = '';
      break;

    case 'kill':
      labels.consoleLogs.textContent = `${pet.stats.name} has been killed :(`;
      pet.stats.food = 0;
      pet.stats.sleep = 0;
      pet.stats.cleanliness = 0;
      inputs.consoleInput.value = '';
      break;

    case 'god':
      labels.consoleLogs.textContent = 'god mode enabled';
      pet.stats.food = 99999;
      pet.stats.sleep = 99999;
      pet.stats.cleanliness = 99999;
      inputs.consoleInput.value = '';
      break;

    default:
      labels.consoleLogs.textContent = 'Command not found. Type help for a list of commands.';
      inputs.consoleInput.value = '';
      break;
  }
}
