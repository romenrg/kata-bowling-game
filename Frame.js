"use strict";

const PINS_NUMBER = 10;

class Frame {
    constructor() {
        this.firstRoll = 0;
        this.secondRoll = 0;
        this.bonusPins = 0;
        this.numRolls = 0;
    }
    roll(pins) {
        if (this.numRolls == 0) {
            this.firstRoll = pins;
        }
        else if (this.numRolls == 1) {
            this.secondRoll = pins;
        }
        this.numRolls++;
    }
    bonus(pins) {
        if (this.isStrike() || this.isSpare()) {
            this.bonusPins = pins;
        }
    }
    score() {
        return this.firstRoll + this.secondRoll + this.bonusPins;
    }
    areFrameRollsFinished() {
        return (this.numRolls >= 2) || ((this.numRolls == 1) && (this.isStrike()))
    }
    isStrike() {
        return this.firstRoll == PINS_NUMBER;
    }
    isSpare() {
        return (this.firstRoll != PINS_NUMBER) && ((this.firstRoll + this.secondRoll) == PINS_NUMBER);
    }
}

module.exports = Frame;