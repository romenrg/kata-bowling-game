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
    });
    it('RollingAll, processing all the balls rolled at once with no spares nor strikes', function() {
        game.rollAll([[1,3],[3,2],[4,5],[6,2],[3,3],[1,1],[4,2],[7,0],[2,6],[0,1]]);
        expect(game.score()).to.equal(56);
    });
    it('RollingAll, processing all the balls rolled at once (with one spare)', function() {
        game.rollAll([[1,3],[3,2],[4,6],[6,2],[3,3],[1,1],[4,2],[7,0],[2,6],[0,1]]);
        expect(game.score()).to.equal(63);
    });
    it('RollingAll, processing all the balls rolled at once (with one strike)', function() {
        game.rollAll([[1,3],[3,2],[4,5],[6,2],[3,3],[1,1],[4,2],[10],[2,6],[0,1]]);
        expect(game.score()).to.equal(67);
    });
    it('RollingAll, processing all the balls rolled at once (with one spare and one strike)', function() {
        game.rollAll([[1,3],[3,2],[4,6],[6,2],[3,3],[1,1],[4,2],[10],[2,6],[0,1]]);
        expect(game.score()).to.equal(74);
    });
    it('RollingAll, processing the input as a string', function() {
        game.rollAll("[[1,3],[3,2],[4,6],[6,2],[3,3],[1,1],[4,2],[10],[2,6],[0,1]]");
        expect(game.score()).to.equal(74);
    });
    it('Should return true (rollAll) since the syntax of this example is right', function() {
        var successfullyParsed = game.rollAll("[[1,3],[3,2],[4,6],[6,2],[3,3],[1,1],[4,2],[10],[2,6],[0,1]]");
        expect(successfullyParsed).to.equal(true);
    });
    it('Should return false (rollAll) since the syntax of this example is wrong', function() {
        var successfullyParsed = game.rollAll("[[1,3],[3,2],[4]");
        expect(successfullyParsed).to.equal(false);
    });
});