"use strict";
var Frame = require("./Frame");

const FRAMES_NUMBER = 10;

class Game {
    constructor() {
        this.currentFrame = 0;
        this.frames = [];
        for (var i=0; i<FRAMES_NUMBER; i++) {
            this.frames.push(new Frame());
        }
    }
    rollAll(framesListWithScores) {
        var framesArray = JSON.parse(framesListWithScores);
        return Array.isArray(framesArray);
    }
    roll(pins) {
        this.frames[this.currentFrame].roll(pins);
        if (this.frames[this.currentFrame].areFrameRollsFinished()) {
            this.currentFrame++;
        }
    }
    score() {
        let totalScore = 0;
        for (var i=0; i<FRAMES_NUMBER; i++) {
            totalScore += this.frames[i].score();
        }
        return totalScore;
    }
}

module.exports = Game;