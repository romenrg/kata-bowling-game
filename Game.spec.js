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
    });
    it('Rolling two times but not reaching 10, the score must be the addition', function() {
        let game = new Game();
        game.roll(5);
        game.roll(2);
        expect(game.score()).to.equal(7);
    });
    it('Rolling three balls without achieving spares nor strikes; the score must be the addition', function() {
        let game = new Game();
        // First frame
        game.roll(5);
        game.roll(2);
        // Second frame
        game.roll(6);
        expect(game.score()).to.equal(13);
    })
});