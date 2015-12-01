"use strict";

class Game {
    rollAll(framesListWithScores) {
        var framesArray = JSON.parse(framesListWithScores);
        return Array.isArray(framesArray);
    }

    roll(pins) {
        return true;
    }

    score() {
        return 0;
    }
}

module.exports = Game;