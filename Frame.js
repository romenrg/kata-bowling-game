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
        if (this._isBonusPending()) {
            this.bonusPins = pins;
        }
    }
    score() {
        return this.firstRoll + this.secondRoll + this.bonusPins;
    }
    _isBonusPending(){
        return (this.firstRoll + this.secondRoll) == PINS_NUMBER;
    }
}

module.exports = Frame;