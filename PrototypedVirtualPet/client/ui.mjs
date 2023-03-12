'use strict';

import * as pet from './pet.mjs';

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
};

export const labels = {
  feedPetTxt: null,
  sleepPetTxt: null,
  cleanPetTxt: null,
  happinessTxt: null,
  petNameTxt: null,
};

export const meters = {
  happyMeter: null,
  foodMeter: null,
  sleepMeter: null,
  cleanMeter: null,
};

export const sliders = {
  redSlider: null,
  greenSlider: null,
  blueSlider: null,
};

export const inputs = {
  petNameInput: null,
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
  sliders.redSlider = document.querySelector('#redSlider');
  sliders.greenSlider = document.querySelector('#greenSlider');
  sliders.blueSlider = document.querySelector('#blueSlider');
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

  buttons.feedButton.addEventListener('click', pet.feedPet);
  buttons.cleanButton.addEventListener('click', pet.cleanPet);
  buttons.sleepButton.addEventListener('click', pet.sleepPet);
  buttons.saveColor.addEventListener('click', pet.saveColor);
  buttons.revertColor.addEventListener('click', pet.revertColor);
  sliders.redSlider.addEventListener('click', pet.previewColor);
  sliders.greenSlider.addEventListener('click', pet.previewColor);
  sliders.blueSlider.addEventListener('click', pet.previewColor);
  buttons.setPetNameButton.addEventListener('click', pet.setName);
  buttons.saveGameButton.addEventListener('click', pet.saveGame);
  buttons.loadGameButton.addEventListener('click', pet.loadGame);
}


export function ui() {
  labels.feedPetTxt.textContent = `Food Stat: ${pet.stats.food}`;
  labels.cleanPetTxt.textContent = `Cleanliness Stat: ${pet.stats.cleanliness}`;
  labels.sleepPetTxt.textContent = `Sleep Stat: ${pet.stats.sleep}`;
  labels.happinessTxt.textContent = `Happiness Stat: ${pet.stats.happiness}`;

  animationHandler(spriteSheet, animTick, 0, 20, 24, animSelector.sadAnim);

  // Meters Updating Below
  meters.foodMeter.value = pet.stats.food;
  meters.cleanMeter.value = pet.stats.cleanliness;
  meters.sleepMeter.value = pet.stats.sleep;
  meters.happyMeter.value = pet.stats.happiness;
  console.log(animTick);
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
  ctx.drawImage(spriteSheet, sx, sy, 128, 128, 150, 250, spriteSheet.width / 2, spriteSheet.height / 2);
}

function animationHandler(spriteSheet, animTick, anim1, anim2, anim3, aninSelector) {
  const positionSx = [0, 128, 256];
  const positionSy = [0, 128];
  switch (animTick) {
    case anim1:
      drawPet(spriteSheet, positionSx[0], positionSy[aninSelector]);
      break;

    case anim2:
      drawPet(spriteSheet, positionSx[1], positionSy[aninSelector]);
      break;

    case anim3:
      drawPet(spriteSheet, positionSx[2], positionSy[aninSelector]);
      break;
  }
}
