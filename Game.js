"use strict";

class Game {
    constructor() {
        this.totalPins = 0;
    }
    rollAll(framesListWithScores) {
        var framesArray = JSON.parse(framesListWithScores);
        return Array.isArray(framesArray);
    }

    roll(pins) {
        this.totalPins += pins;
        return true;
    }

    score() {
        return this.totalPins;
    }
}

module.exports = Game;