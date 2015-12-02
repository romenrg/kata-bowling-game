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
        if (!Array.isArray(framesListWithScores)) {
            framesListWithScores = JSON.parse(framesListWithScores);
        }
        if (Array.isArray(framesListWithScores)) {
            for(var i=0; i<framesListWithScores.length; i++) {
                if (Array.isArray(framesListWithScores[i])) {
                    for (var j=0; j<framesListWithScores[i].length; j++) {
                        this.roll(framesListWithScores[i][j]);
                    }
                }
            }
        }
    }
    roll(pins) {
        this.frames[this.currentFrame].roll(pins);
        if (this.frames[this.currentFrame].areFrameRollsFinished()) {
            this._addStrikeBonusToPreviousFrameIfNecessary();
            this.currentFrame++;
        }
        else {
            this._addSpareBonusToPreviousFrameIsNecessary();
        }
    }
    score() {
        let totalScore = 0;
        for (var i=0; i<FRAMES_NUMBER; i++) {
            totalScore += this.frames[i].score();
        }
        return totalScore;
    }
    _addSpareBonusToPreviousFrameIsNecessary() {
        if (this.currentFrame > 0) {
            let previousFrame = this.currentFrame - 1;
            if (this.frames[previousFrame].isSpare()) {
                this.frames[previousFrame].bonus(this.frames[this.currentFrame].firstRoll)
            }
        }
    }
    _addStrikeBonusToPreviousFrameIfNecessary() {
        if (this.currentFrame > 0) {
            let previousFrame = this.currentFrame - 1;
            if (this.frames[previousFrame].isStrike()) {
                this.frames[previousFrame].bonus(this.frames[this.currentFrame].firstRoll + this.frames[this.currentFrame].secondRoll)
            }
        }
    }
}

module.exports = Game;