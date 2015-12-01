"use strict";
let Game = require("./Game");
let expect = require('chai').expect;

describe('Bowling Game', function() {
    it('Initially the score should be 0', function() {
        let game = new Game();
        expect(game.score()).to.equal(0);
    });

    it('Only having rolled once, the score must be the number of pins knocked down by that roll', function() {
        let game = new Game();
        game.roll(5);
        expect(game.score()).to.equal(5);
    })
});