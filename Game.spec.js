"use strict";
let Game = require("./Game");
let expect = require('chai').expect;

describe('Bowling Game - Game class', function() {
    let game;
    beforeEach(function() {
        game = new Game();
    });
    it('Initially the score should be 0', function() {
        expect(game.score()).to.equal(0);
    });
    it('Only having rolled once, the score must be the number of pins knocked down by that roll', function() {
        game.roll(5);
        expect(game.score()).to.equal(5);
    });
    it('Rolling two times but not reaching 10, the score must be the addition', function() {
        game.roll(5);
        game.roll(2);
        expect(game.score()).to.equal(7);
    });
    it('Rolling three balls without achieving spares nor strikes; the score must be the addition', function() {
        // First frame
        game.roll(5);
        game.roll(2);
        // Second frame
        game.roll(6);
        expect(game.score()).to.equal(13);
    });
    it('Rolling three balls, achieving a spare in the first frame', function() {
        // First frame
        game.roll(4);
        game.roll(6);
        // Second frame
        game.roll(7);
        expect(game.score()).to.equal(24); // Includes the third roll twice (bonus of 1st frame + 3rd roll)
    });
    it('Rolling four balls, achieving a strike with the first one', function() {
        // First frame
        game.roll(10);
        // Second frame
        game.roll(3);
        game.roll(6);
        expect(game.score()).to.equal(28);
    })
});