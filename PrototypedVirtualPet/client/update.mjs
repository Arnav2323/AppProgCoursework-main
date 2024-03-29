'use strict';

import * as pet from './pet.mjs';

let timeScale = 1;
// This function decrements the pets stats. it also ensures nothing goes below 0;
export function decrementStats() {
  if (pet.stats.isAlive === false) {
    return;
  }

  if (pet.stats.food <= 0) {
    pet.stats.food = 0;
    pet.death();
  } else {
    pet.stats.food -= pet.foodDec * timeScale;
  }

  if (pet.stats.cleanliness <= 0) {
    pet.stats.cleanliness = 0;
    pet.death();
  } else {
    pet.stats.cleanliness -= pet.cleanlinessDec * timeScale;
    // pet.stats.needClean = false;
  }

  if (pet.stats.sleep <= 0) {
    pet.stats.sleep = 0;
    pet.death();
  } else {
    pet.stats.sleep -= pet.sleepDec * timeScale;
  }

  if (pet.stats.happiness <= 100) {
    pet.stats.happiness = 0;
  }
  pet.stats.happiness = (pet.stats.sleep + pet.stats.food + pet.stats.sleep) / 3;
  pet.stats.aliveTime += 1 * timeScale;
}

export function timeScaleAdjust(timeScaleFactor) {
  timeScale = timeScaleFactor;
}
