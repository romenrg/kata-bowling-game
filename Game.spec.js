"use strict";
let Game = require("./Game");
let expect = require('chai').expect;

describe('Bowling Game - Game class', function() {
    let game;
    beforeEach(function() {
        game = new Game();
    });
    it('Should return a score of 0, since no balls have been rolled', function() {
        expect(game.score()).to.equal(0);
    });
    it('Should return the number of pins knocked down by the only ball rolled', function() {
        game.roll(5);
        expect(game.score()).to.equal(5);
    });
    it('Should return the addition of the pins knocked down by the 2 balls rolled', function() {
        game.roll(5);
        game.roll(2);
        expect(game.score()).to.equal(7);
    });
    it('Should return the addition of the pins knocked down in the 3 rolls, since there were no spares nor strikes', function() {
        // First frame
        game.roll(5);
        game.roll(2);
        // Second frame
        game.roll(6);
        expect(game.score()).to.equal(13);
    });
    it('Should take into account the spare achieved in the first frame by adding the pins of the 3rd roll twice', function() {
        // First frame
        game.roll(4);
        game.roll(6);
        // Second frame
        game.roll(7);
        expect(game.score()).to.equal(24); // Includes the third roll twice (bonus of 1st frame + 3rd roll)
    });
    it('Should take into account the strike achieved in the first frame by adding the pins of the second frame twice', function() {
        // First frame
        game.roll(10);
        // Second frame
        game.roll(3);
        game.roll(6);
        expect(game.score()).to.equal(28);
    });
    it('Should process all at once and return the right score (no spares nor strikes)', function() {
        game.rollAll([[1,3],[3,2],[4,5],[6,2],[3,3],[1,1],[4,2],[7,0],[2,6],[0,1]]);
        expect(game.score()).to.equal(56);
    });
    it('Should process all at once and return the right score (one spares)', function() {
        game.rollAll([[1,3],[3,2],[4,6],[6,2],[3,3],[1,1],[4,2],[7,0],[2,6],[0,1]]);
        expect(game.score()).to.equal(63);
    });
    it('Should process all at once and return the right score (one strike)', function() {
        game.rollAll([[1,3],[3,2],[4,5],[6,2],[3,3],[1,1],[4,2],[10],[2,6],[0,1]]);
        expect(game.score()).to.equal(67);
    });
    it('Should process all at once and return the right score (one spare and one strike)', function() {
        game.rollAll([[1,3],[3,2],[4,6],[6,2],[3,3],[1,1],[4,2],[10],[2,6],[0,1]]);
        expect(game.score()).to.equal(74);
    });
    it('Should process the string input and return the same score as if it was directly the array', function() {
        game.rollAll("[[1,3],[3,2],[4,6],[6,2],[3,3],[1,1],[4,2],[10],[2,6],[0,1]]");
        expect(game.score()).to.equal(74);
    });
    it('Should return true (rollAll) since the syntax of this example is right', function() {
        let successfullyParsed = game.rollAll("[[1,3],[3,2],[4,6],[6,2],[3,3],[1,1],[4,2],[10],[2,6],[0,1]]");
        expect(successfullyParsed).to.equal(true);
    });
    it('Should return false (rollAll) since the syntax of this example is wrong', function() {
        let successfullyParsed = game.rollAll("[[1,3],[3,2],[4]");
        expect(successfullyParsed).to.equal(false);
    });
});